import * as dotenv from 'dotenv';
//import fetch from 'node-fetch';
import Express  from 'express';
//import {Meteors} from '../proxy_server/useCase/index.js'
//import {MeteorsReposytory} from './repository/index.js'
//import MeteorsReposytory from './repository/index.js';
import { router } from './delivery/http/meteors.js';


dotenv.config();

const app = Express();
const port = process.env.PORT;
// const key = process.env.KEY;
// const url = process.env.URL;
//const api = url + key;

app.use(router)
 
// app.get('/meteors', async (req, res)=>{
//   // const nasa = await fetch(api)
//   // const data = await nasa.json();
//   // let result=[]
  

//   let info = new Meteors()
//   await info.getMeteors()
  
//   // console.log(info.result)
//   //getMeteors(data)
//   //getMeteorsData(data.near_earth_objects)
//   //  res.send(info);
//   // console.log(result)
//   })

 

app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}/`);
})