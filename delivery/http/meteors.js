import Express  from 'express';
import Repository from '../../repository/index.js';
import useCase from '../../useCase/index.js';
import * as fs from 'fs'
import Joi from 'joi';
import validate from './../../validator.js/validator.js';
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";


export const router = Express.Router();

Sentry.init({
  dsn: "https://285f3ed56b5242f0a28b56e9f826c05e@o4504277450227712.ingest.sentry.io/4504277498331136",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    // new Tracing.Integrations.Express({ app }),
  ],
  tracesSampleRate: 1.0,
});

router.use(Express.urlencoded({extended:false}));

  const Meteors = Joi.object().keys({ 
    params: Joi.string().required(), 
    startDate: Joi.string().required(), 
    endDate: Joi.string().required() })

    const Photo = Joi.object().keys({ 
      id: Joi.number().required(), 
      api_key: Joi.string().required(), 
      name: Joi.string().required() })

router.get('/meteors', validate(Meteors,'query'),async (req, res)=>{
  let startDate = req.query.startDate
  let endDate = req.query.endDate
  let urlDate = 'https://api.nasa.gov/neo/rest/v1/feed?start_date='+startDate+'&end_date='+endDate+'&api_key='+Repository.NasaApi.key
  let params = req.query.params
  await useCase.Meteors.setDate(urlDate)
  const data = await useCase.Meteors.getData()
  let {value, error } =await useCase.Meteors.getMeteorsData(params,data)
  if(error){
    console.log("error")
  }else{
  res.send(value)
  return value
  }
})
 
    router.post('/user',validate(Photo,'body'), async (req,res)=>{
      let data = await useCase.Photo.getData()
      let params = useCase.Photo.date
      let getPhotosData = await useCase.Photo.getPhotosData(params,data)
      let {value, error} =await Repository.Photos.getPhoto(getPhotosData)
      if(error){
      res.sendStatus(500)
      console.log(error)
    } else{
      fs.readFile(value,function(err, content){
        res.writeHead(200, {'Content-type':'image/png'})
        res.end(content)
      })
    }
    })