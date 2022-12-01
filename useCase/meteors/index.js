import repository from '../../repository/index.js';

class Meteors{ 
    constructor() {}
     result = []
     data=[]
     date = ""
      setDate(date){
      this.date =  date
      return this.date
     }

     async getData(){
      let data = await repository.NasaApi.getMeteorsRequest(this.date)
      this.data = data
      return this.data
     }
     
    async getMeteorsData(params,data_,id,name) {  
        Object.entries(data_).forEach(([key,value]) => {
         if(typeof value == "object"){
          if(value.id){
            id =value.id 
         }
         if(value.name){ 
          name =value.name 
       }
           this.getMeteorsData(params,value,id,name)
         }      
         if(params.includes(key)){
           this.result.push({id:id,name:name})
           this.result[this.result.length-1][key]=value
         }   
       }); 
       return this.result
     }
   }
   export default new Meteors()
