import Express  from 'express';
import { Meteors } from '../../useCase/meteors.js';
import { MeteorsA } from './../../useCase/meteors/meteorsA.js';
export const router = Express.Router();

router.get('/meteors', async (req, res)=>{
    let info = new Meteors()
    //await info.getMeteorsData(req.query)
    //console.log(req.query.params)
     info.getMeteors(req.query.params)
     
    //const date = req.query.meteors.date

    
    //const count = req.query.meteors.count
    //const wereDangerousMeteors = req.query.meteors.wereDangerousMeteors
    //res.send("date: "+date+" count: "+count+" wereDangerousMeteors: "+wereDangerousMeteors)
    //}
    //res.send("date: "+date)
    //id.push(req.query.id)
    //res.send(id)
    //info.getProps(id)
    //res.send("date: "+date+" count: "+count+" wereDangerousMeteors: "+wereDangerousMeteors)
    
    //res.send(typeof wereDangerousMeteors)
    
    //await res.send(Buffer.from(info.getMeteors()))
    })
 