import * as dotenv from 'dotenv';
import Express  from 'express';
import { router } from './delivery/http/meteors.js';
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";

dotenv.config();

const app = Express();
const port = process.env.PORT;

Sentry.init({
  dsn: "https://285f3ed56b5242f0a28b56e9f826c05e@o4504277450227712.ingest.sentry.io/4504277498331136",
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
  ],
  tracesSampleRate: 1.0,
});

app.use(router)
 
app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}/`);
})