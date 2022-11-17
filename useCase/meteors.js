import MeteorsReposytory from '../repository/meteorsRepository.js'
import MeteorsRecurse from './meteors/meteorsRecurse.js';

class Meteors{
    constructor() {}
    async getMeteors(params){
        const met = MeteorsReposytory
        const data = await met.getMeteors()
        let info = MeteorsRecurse
        //const props= Object.entries(params)
        info.getMeteorsData(data,params)
        console.log(info.result)
    }
}
export default new Meteors()