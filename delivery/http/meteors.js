// import * as dotenv from 'dotenv';
// import Express  from 'express';
// const app = Express();
// const port = process.env.PORT;
// import {Meteors} from '../proxy_server/useCase/index.js'
// //import {MeteorsReposytory} from './repository/index.js'
// import {Meteors} from '../proxy_server/useCase/index.js'
//import {MeteorsReposytory} from './repository/index.js'
import Express  from 'express';
import { Meteors } from './../../useCase/meteors.js';
export const router = Express.Router();

router.get('/meteors', async (req, res)=>{
    // const nasa = await fetch(api)
    // const data = await nasa.json();
    // let result=[]
    
  
    let info = new Meteors()
    await info.getMeteors()
    
    // console.log(info.result)
    //getMeteors(data)
    //getMeteorsData(data.near_earth_objects)
    //  res.send(info);
    // console.log(result)
    })
    //module.exports = router;