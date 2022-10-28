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
  const map = new Map();
  let i;
  let date =['2022-10-14'];
  for (i = 0; i < data['near_earth_objects'][date].length; i++) {
    map.set('id:'+i, data['near_earth_objects'][date][i].id);
    map.set('name:'+i, data['near_earth_objects'][date][i].name);
    map.set('diameter:'+i, data['near_earth_objects'][date][i]['estimated_diameter']['meters']);
    map.set('is_potentially_hazardous_asteroid:'+i, data['near_earth_objects']['2022-10-14'][i].is_potentially_hazardous_asteroid)
    map.set('close_approach_data:'+i, data['near_earth_objects'][date][i]['close_approach_data']);
    map.set('relative_velocity:'+i, data['near_earth_objects'][date][i]['close_approach_data'][0]['relative_velocity']['kilometers_per_hour']);
  } 
  console.log(map)
  res.send([...map.entries()])
  // res.send(data);
})

app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}/`);
})