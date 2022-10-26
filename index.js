import * as dotenv from 'dotenv';
import fetch from 'node-fetch';
import Express  from 'express';
//import { DotenvConfigOptions } from 'dotenv';
//import env from ".env"
//const port = 3000;
//const hostname = '127.0.0.1';
const app = Express();
dotenv.config();
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
//const hostname =process.env.HOSTNAME;
// const express = require('express');
 
// const exp = require('./exp');
// const port = 4000;
// const hostname = '127.0.0.1';

// app.get('/', (req, res)=>{
//   res.send("hello world!")
// })



app.listen(port, ()=>{
  console.log(`Server running at http://${hostname}:${port}/`);
})
console.log("port " + port);

// app.get('/meteors', async (req, res)=>{
//   const nasa = await fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-10-10&end_date=2022-10-17&api_key=DEMO_KEY',{
//     body: {
//     diam: 'estimated_diameter'
// }})
//   //const data = await nasa.json();
//   res.send(nasa);
// })



app.get('/meteors', async (req, res)=>{
  const nasa = await fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-10-10&end_date=2022-10-17&api_key=DEMO_KEY')
  
  const data = await nasa.json();
  res.send(data);
    //near_earth_objects


//   items: []
//   items: result.near_earth_objects
//   items.map(item)
//  const key = item.name;
//  item.id;
})



// app.get('/',(req,res)=>{
// res.status(200)
// })



// const port = 4000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });