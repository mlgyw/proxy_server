import * as dotenv from 'dotenv';
import { createWriteStream } from 'fs';
import fetch from 'node-fetch';
import { pipeline } from 'stream';
import util  from 'util'

import path, { dirname } from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//import useCase from '../../useCase';

dotenv.config();

class Photos{
    NasaApikey = process.env.KEY;
constructor(){   
}
async getPhotoRequest (date){
    const nasa = await fetch(date)//||this.api)
    const data = await nasa.json();
    //console.log(data)
    //const photo = await fetch(data)
    return data;
}  
async getPhoto(url){
    const streamPipeline = util.promisify(pipeline)
    const response = await fetch(url)
    await streamPipeline(response.body,createWriteStream('./nasaPhoto.png'))
    let img = 'D:/proxy_server/nasaPhoto.png'//__dirname + './nasaPhoto.png'
    

    // console.log(url)
    // const data = await nasa.blob()//||this.api)
    // //let img = URL.createObjectURL(data)
    // console.log(data)
    return img

}
} 
export default new Photos()