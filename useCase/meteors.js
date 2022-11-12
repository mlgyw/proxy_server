import {MeteorsA} from './meteors/index.js'
import { MeteorsReposytory } from '../repository/index.js'

export class Meteors{
    
    // getMeteorsData(data){
    //     data = this.data
    // }

    async getMeteors(){
        const result = []
        // getMeteorsData(data)
        let request = new MeteorsReposytory()
        const data = await request.getMeteors()
        let info = new MeteorsA()
        info.getMeteorsData(data,result)
        console.log(result)
        
    }
    
}