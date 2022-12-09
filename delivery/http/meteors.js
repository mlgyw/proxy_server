import Express from "express";
import Joi from "joi";
import * as fs from "fs";
import useCase from "../../useCase/index.js";
import validate from "./../../validator.js/validator.js";

export const router = Express.Router();

router.use(Express.urlencoded({ extended: false }));
const Meteors = Joi.object().keys({
  params: Joi.string().required(),
  startDate: Joi.string().required(),
  endDate: Joi.string().required(),
});

router.get("/meteors", validate(Meteors, "query"), async (req, res) => {
  let startDate = req.query.startDate;
  let endDate = req.query.endDate;
  let params = req.query.params;
  let { value, error } = await useCase.Meteors.Meteors(
    params,
    startDate,
    endDate
  );
  if (error) {
    res.sendStatus(500);
    console.log(error);
  } else {
    res.send(value);
    return value;
  }
});

const Photo = Joi.object().keys({
  id: Joi.number().required(),
  api_key: Joi.string().required(),
  name: Joi.string().required(),
});

router.post("/photo", validate(Photo, "body"), async (req, res) => {
  let picture = await useCase.Photo.PhotoData();
  if (picture) {
    fs.readFile(picture, function (err, content) {
      res.writeHead(200, { "Content-type": "image/png" });
      res.end(content);
    });
  } else {
    res.sendStatus(500);
    error = new Error("route is not working");
    console.log(error);
  }
});
