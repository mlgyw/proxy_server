import * as dotenv from 'dotenv';
import fetch from 'node-fetch';
import Express  from 'express';

dotenv.config();

const app = Express();
const port = process.env.PORT;
const key = process.env.KEY;
const url = process.env.URL
const api = url + key;

let props = ["id","name",'meters',"is_potentially_hazardous_asteroid",'kilometers_per_hour','kilometers_per_hour','close_approach_date_full']
let result=[]

app.get('/meteors', async (req, res)=>{
  const nasa = await fetch(api)
  const data = await nasa.json();
  
  let getMeteorsData = (receivedData) => {
    Object.entries(receivedData).forEach(([key,value]) => {
      if(typeof value == "object"){
        getMeteorsData(value)
      }
      if(props.includes(key)){
        result.push({key,value})
      }
    });
  }

  getMeteorsData(data.near_earth_objects)
  res.send(result);
  })

 

app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}/`);
})