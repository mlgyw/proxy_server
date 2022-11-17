import Express  from 'express';
import  Meteors  from '../../useCase/meteors.js';

export const router = Express.Router();

router.get('/meteors', async (req, res)=>{
    let info = Meteors
     info.getMeteors(req.query.params)
    })
 