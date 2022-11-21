import Express  from 'express';
import  UseCases  from '../../useCase/index.js';

export const router = Express.Router();

router.get('/meteors', async (req, res)=>{
    //let info = Meteors
    // info.getMeteors(req.query.params)
        let params = req.query.params
       // console.log(params)
      let a =await UseCases.Meteors.getMeteorsData(params,UseCases.Meteors.data) //exmple
      console.log(a)
    //console.log(data)
    })
 