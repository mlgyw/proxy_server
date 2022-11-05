import * as dotenv from 'dotenv';
import fetch from 'node-fetch';
import Express  from 'express';

dotenv.config();

const app = Express();
const port = process.env.PORT;
const key = process.env.KEY;
const api = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-10-10&end_date=2022-10-17&api_key=' + key;

let props = ["id","name",'meters',"is_potentially_hazardous_asteroid",'kilometers_per_hour','kilometers_per_hour','close_approach_date_full']
let result=[]

app.get('/meteors', async (req, res)=>{
  const nasa = await fetch(api)
  const data = await nasa.json();
  
  getMeteorsData(data.near_earth_objects)
  res.send(result);
  })

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

app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}/`);
})