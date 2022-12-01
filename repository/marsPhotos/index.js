import * as dotenv from 'dotenv';
import { createWriteStream } from 'fs';
import fetch from 'node-fetch';
import { pipeline } from 'stream';
import util  from 'util'
import path, { dirname } from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

class Photos{
    NasaApikey
constructor(){ 
    this.NasaApikey = process.env.KEY;  
}
async getPhotoRequest (date){
    const nasa = await fetch(date)//||this.api)
    const data = await nasa.json();
    return data;
}  
async getPhoto(url){
    const streamPipeline = util.promisify(pipeline)
    const response = await fetch(url)
    await streamPipeline(response.body,createWriteStream('./nasaPhoto.png'))
    let img = 'D:/proxy_server/nasaPhoto.png'//__dirname + './nasaPhoto.png'
    return img
}
} 
export default new Photos()