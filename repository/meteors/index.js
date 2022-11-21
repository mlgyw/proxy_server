import * as dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

class NasaApi{
        key = process.env.KEY;
        url = process.env.URL;
        api = this.url + this.key;
    constructor(){
        
    }
    async getMeteorsRequest (){
        const nasa = await fetch(this.api)
        const data = await nasa.json();
        return data;
    }  
} 
export default new NasaApi()