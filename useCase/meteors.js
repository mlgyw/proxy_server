import {MeteorsA} from './meteors/index.js'
import { MeteorsReposytory } from '../repository/index.js'

export class Meteors{
//     props=[]
//  getProps(props){
//    this.props=props
//   }

    async getMeteors(params){

        //const result = []
        // getMeteorsData(data)
        // let request = new MeteorsReposytory()
        // const data = await request.getMeteors()
        const met = new MeteorsReposytory()
        const data = await met.getMeteors()
        let info = new MeteorsA()
        //const props= Object.entries(params)
        info.getMeteorsData(data,params)
        console.log(info.result)
        
        //return result
        
    }
    
}