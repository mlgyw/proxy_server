import Express from "express";
import Repository from "../../repository/index.js";
import useCase from "../../useCase/index.js";
import * as fs from "fs";
import Joi from "joi";
import validate from "./../../validator.js/validator.js";

export const router = Express.Router();

router.use(Express.urlencoded({ extended: false }));
const Meteors = Joi.object().keys({
  params: Joi.string().required(),
  startDate: Joi.string().required(),
  endDate: Joi.string().required(),
});

const Photo = Joi.object().keys({
  id: Joi.number().required(),
  api_key: Joi.string().required(),
  name: Joi.string().required(),
});

router.get("/meteors", validate(Meteors, "query"), async (req, res) => {
  let startDate = req.query.startDate;
  let endDate = req.query.endDate;
  let params = req.query.params;
  Repository.NasaApi.getDate(startDate, endDate);
  // const data = await Repository.NasaApi.getData();
  // let { value, error } = await useCase.Meteors.getMeteorsData(params, data);
  let { value, error } = await useCase.Meteors.setData(params)
  if (error) {
    res.sendStatus(500);
    console.log(error);
  } else {
    res.send(value);
    return value;
  }
});

router.post("/user", validate(Photo, "body"), async (req, res) => {
  //let data = await useCase.Photo.getData();
  //let getPhotosData = await useCase.Photo.getPhotosData(data);
  let getPhotosData = await useCase.Photo.setData()//data)
  let { value, error } = await Repository.Photos.getPhoto(getPhotosData);
  if (error) {
    res.sendStatus(500);
    console.log(error);
  } else {
    fs.readFile(value, function (err, content) {
      res.writeHead(200, { "Content-type": "image/png" });
      res.end(content);
    });
  }
});
