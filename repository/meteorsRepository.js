import NasaApi from './meteors/index.js'

class MeteorsReposytory{
    constructor() {}
    async getMeteors (){
        let request = NasaApi
        return await request.getMeteorsRequest()  
    }   
}
export default new MeteorsReposytory()