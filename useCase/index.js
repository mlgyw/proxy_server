//создать класс который будет содержать все классы логики 
// export * from './meteors.js';
// export * from './meteors/index.js'
//import  Meteors  from '../useCase/index.js';
import Meteors from './meteors/index.js';


class UseCases{
    Meteors//meteors resurse
constructor(){
    this.Meteors = Meteors
}
}
export default new UseCases()

//const data = UseCases.MeteorsData.getMeteorsData()//передача параметров 