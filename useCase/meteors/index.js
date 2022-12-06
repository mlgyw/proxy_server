import repository from '../../repository/index.js';

class Meteors{ 
    constructor() {}
     result = []
     data=[]
     date = ""
      setDate(date){
        const result = {
          value : null,
          error : null
        }
        try{
      this.date =  date
      if(date!=null){
        return this.date
      }
    }
      catch(error){
        console.log(error)
        result.error = error
        return result.error
      }
     }

     async getData(){
      let {value,error} = await repository.NasaApi.getMeteorsRequest(this.date)
      if(error){
        console.log("error getData")
      }else{
      this.data = value
      return this.data
      }
     }
     
    async getMeteorsData(params,data_,id,name) { 
      const result = {
        value : null,
        error : null
      }
      try{
        if(params!=null&&data_!=null){
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
       result.value = this.result
       return result
       //return this.result
     }
     else{
      console.log('Whoops!   getMeteorsData is not working')
     }
    }
    catch(error){
      console.log(error)
      result.error = error
      return result
    }
   }
   }
   export default new Meteors()
