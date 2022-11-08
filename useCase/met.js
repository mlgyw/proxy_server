//создать класс который будет содержать все классы логики 
import getMeteorsData from './useCase/meteors/index.js'
export default class Meteors{
    getMeteors(data){
        getMeteorsData(data)
    }
    
}
// export default new Meteors();
