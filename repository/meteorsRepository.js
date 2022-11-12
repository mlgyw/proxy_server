import {MeteorsR} from './meteors/index.js'


export class MeteorsReposytory{
    async getMeteors (){
        let request = new MeteorsR()
        //request.MeteorsReposytory
        return await request.getMeteorsRequest()
        
    }
    
}