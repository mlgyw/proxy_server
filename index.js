import * as dotenv from 'dotenv';
import fetch from 'node-fetch';
import Express  from 'express';

dotenv.config();

const app = Express();
const port = process.env.PORT;
const key = process.env.KEY;
const api = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-10-10&end_date=2022-10-17&api_key=' + key;

app.get('/meteors', async (req, res)=>{
  const nasa = await fetch(api)
  const data = await nasa.json();
  let result={}
  let arr =[]
  for(let item in data['near_earth_objects']){
   for (let i = 0; i < data['near_earth_objects'][item].length; i++) {
    result.id = data['near_earth_objects'][item][i].id
    result.name=data['near_earth_objects'][item][i].name
    result.diameter = data['near_earth_objects'][item][i]['estimated_diameter']['meters']//['estimated_diameter_min']
    result.hazard =data['near_earth_objects']['2022-10-14'][i]?.is_potentially_hazardous_asteroid
    result.approach =data['near_earth_objects'][item][i]['close_approach_data']
    result.relative = data['near_earth_objects'][item][i]['close_approach_data'][0]['relative_velocity']['kilometers_per_hour']
   
    arr.push(result)
    result={};
    }  }
  console.log(arr)
  // res.send(data);
})

app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}/`);
})