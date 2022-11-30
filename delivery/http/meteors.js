import Express  from 'express';
import repository from '../../repository/index.js';
import useCase from '../../useCase/index.js';
import  UseCases  from '../../useCase/index.js';
//import fs from 'fs'
import * as fs from 'fs'
//import marsPhotos from '../../useCase/marsPhotos/index.js';



export const router = Express.Router();

router.use(Express.urlencoded({extended:false}));

router.get('/meteors', async (req, res)=>{
    //let info = Meteors
    // info.getMeteors(req.query.params)
        let startDate = req.query.startDate
        //console.log(startDate)
        let endDate = req.query.endDate
        //console.log(endDate)

      let urlDate = 'https://api.nasa.gov/neo/rest/v1/feed?start_date='+startDate+'&end_date='+endDate+'&api_key='+repository.NasaApi.key
      //console.log(urlDate)
        let params = req.query.params
       // console.log(params)
       await useCase.Meteors.setDate(urlDate)
       const data = await useCase.Meteors.getData()
       let getMeteorsData =await UseCases.Meteors.getMeteorsData(params,data) //exmple
       console.log(getMeteorsData)
    //console.log(data)
    })
 
    router.post('/user',async (req,res)=>{
    //  console.log(req.body)
    //  let a = Object.entries(req.body)
    //  console.log()
    //  Object.entries(req.body).forEach(([key, value]) =>{
    //   if(key = "id"){
    //     console.log("ahah")
    //    }
    //  }
    //  )
     //res.status(201).send("Create user")
    //const {id} = req.headers
    //const {name} = req.headers
    //const {API_KEY} = req.headers
    //console.log(id+ "  ap  "+API_KEY)
      //console.log(Object.values(req.body))
    //if(name&&name !== null){

      let counter = 0;
      // console.log(Object.keys(req.headers))
      // console.log(Object.keys(req.body))
      let data = await useCase.marsPhotos.getData()
      let params = useCase.marsPhotos.date
      let getPhotosData = await UseCases.marsPhotos.getPhotosData(params,data)
      let r =await repository.Photos.getPhoto(getPhotosData)
      //get(a_)
      // console.log(repository.Photos.getPhoto(getPhotosData))
      fs.readFile(r,function(err, content){
        res.writeHead(200, {'Content-type':'image/png'})
        //res.write(content, 'binary');
        res.end(content)
        //res.status(201).send(r)
      })
      

      // Object.keys(req.body).forEach(element => {
      //   if(Object.keys(req.headers).includes(element)){
      //     //console.log(element)
      //     ++counter
      //   }
      // })
      // if(counter>=3){
      //   //let bb = repository.Photos.getPhotoRequest(a_)
      //   //console.log(a_)
        
      //   //res.status(201).send(getPhotosData)//await repository.Photos.getPhoto(a_))
      // }
      // else{
      //   res.status(403).send("forbidden")
      // }
        //console.log(Object.keys(req.headers).length)

      // const array1 = Object.keys(req.body);
      // const firstElement = array1.shift();
      // console.log(firstElement)

      // let a = (new Date()).toLocaleDateString()
      // let words = a.split('.').reverse();
      // let strWords = words.join('-')
      // console.log(strWords) 

    //   console.log(req.body)
    //   // console.log(Object.keys(req.headers))
    //   // console.log((Object.keys(req.body)))
    //   //console.log(Object.keys(req.body))
    //   console.log(Object.keys(req.body).toString())
    //   if(Object.keys(req.headers).includes(Object.keys(req.body).toString())){console.log('suka2')}//короче такая шляпа что оно работает только если ключ будет один, в противном случае оно напишет это через запятую
    //   //и в общем суть в том что надо вместо тустринга написать что-то что будет делить массив на строки или цикл. потом если все ок идти к дальнейшей логике которая в блокноте 
    //   if(Object.keys(req.headers).includes(Object.keys(req.body))){
    //     console.log("first")
    //   if(Object.values(req.body) !==null){
    //   const post = req.body
    //   //console.log(post)
    //   res.status(201).send("marsPhoto")//(post)
    // }
    // else {
    //   res.status(403).send("forbidden")
    // }}
    })