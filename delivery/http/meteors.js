import Express  from 'express';
import repository from '../../repository/index.js';
import useCase from '../../useCase/index.js';
import  UseCases  from '../../useCase/index.js';
import * as fs from 'fs'

export const router = Express.Router();

router.use(Express.urlencoded({extended:false}));

router.get('/meteors', async (req, res)=>{
  let startDate = req.query.startDate
  let endDate = req.query.endDate
  let urlDate = 'https://api.nasa.gov/neo/rest/v1/feed?start_date='+startDate+'&end_date='+endDate+'&api_key='+repository.NasaApi.key
  let params = req.query.params
  await useCase.Meteors.setDate(urlDate)
  const data = await useCase.Meteors.getData()
  let getMeteorsData =await UseCases.Meteors.getMeteorsData(params,data)
  console.log(getMeteorsData)
    })
 
    router.post('/user',async (req,res)=>{
      let data = await useCase.Photo.getData()
      let params = useCase.Photo.date
      let getPhotosData = await UseCases.Photo.getPhotosData(params,data)
      let r =await repository.Photos.getPhoto(getPhotosData)
      fs.readFile(r,function(err, content){
        res.writeHead(200, {'Content-type':'image/png'})
        res.end(content)
      })
    })