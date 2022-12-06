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
        const result = {
            value : null,
            error : null
          }
     try{
        const nasa = await fetch(date||this.api)
        const data = await nasa.json(); //null
        // return data;
        if(data!=null){
            result.value = data
            //console.log(typeof result.error)
            return result        
        } 
        else{
            console.log("Whoops!   NasaApi is not working")
        }     
   }
    catch(error){
        console.log(error)
        //throw new Error("Whoops!");
        result.error = error
        //console.log("Whoops!   NasaApi is not working")
        return result
      }
    }  
} 
export default new NasaApi()