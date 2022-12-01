import * as dotenv from 'dotenv';
import Express  from 'express';
import { router } from './delivery/http/meteors.js';

dotenv.config();

const app = Express();
const port = process.env.PORT;

app.use(router)
 
app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}/`);
})