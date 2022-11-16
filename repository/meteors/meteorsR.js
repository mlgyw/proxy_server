import * as dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

export class MeteorsR{
    key = process.env.KEY;
    url = process.env.URL;
    api = this.url + this.key;
    async getMeteorsRequest (){
        const nasa = await fetch(this.api)
        const data = await nasa.json();
        return data;
    }
    
} 