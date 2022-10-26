import * as dotenv from 'dotenv';
import fetch from 'node-fetch';
import Express  from 'express';

const app = Express();
dotenv.config();

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
const key = process.env.KEY;
const api = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-10-10&end_date=2022-10-17&api_key=' + key;


app.get('/meteors', async (req, res)=>{
  const nasa = await fetch(api)
  const data = await nasa.json();
  res.send(data);
})//near_earth_objects


app.listen(port, ()=>{
  console.log(`Server running at http://${hostname}:${port}/`);
})















