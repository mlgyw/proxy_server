import * as dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

class NasaApi{
        key 
        url 
        api 
    constructor(){
        this.key = process.env.KEY;
        this.url = process.env.URL;
        this.api = this.url + this.key;
    }
    async getMeteorsRequest (date){
        const nasa = await fetch(date||this.api)
        const data = await nasa.json();
        return data;
    }  
} 
export default new NasaApi()