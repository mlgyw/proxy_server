import NasaApi from './meteors/index.js'

class Repository{
    NasaApi
    constructor(){
       this.NasaApi = NasaApi
    }
}
export default new Repository()

