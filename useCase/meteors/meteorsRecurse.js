//import { MeteorsRequest } from '../../repository/meteors/meteorsRequest.js';
class MeteorsRecurse{ 
  constructor() {}
   result = []
  async getMeteorsData(data, params,id,name) {  
      Object.entries(data).forEach(([key,value]) => {
       if(typeof value == "object"){
        if(value.id){
          id =value.id 
       }
       if(value.name){
        name =value.name 
     }
         this.getMeteorsData(value,params,id,name)
       }  
       
       if(params.includes(key)){
         this.result.push({id:id,name:name})
         this.result[this.result.length-1][key]=value
         console.log(value)
       }   
     });
     
     return this.result
     
   }
 }
 export default new MeteorsRecurse()