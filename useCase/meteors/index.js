import repository from '../../repository/index.js';
//import MeteorsReposytory from '../../repository/index.js'
class Meteors{ 
    constructor() {}
     result = []
     data=[]
     date = ""
      setDate(date){
      this.date =  date
      //console.log("1"+this.date)
      return this.date
     }
      
    
     async getData(){
      let data = await repository.NasaApi.getMeteorsRequest(this.date)
      //console.log("2"+this.date)
      this.data = data
      return this.data
      //console.log(this.date)
     }
    //  data =  this.getData() //тут проблемма
     
    async getMeteorsData(params,data_,id,name) {  
        // const met = MeteorsReposytory
        //  const data = await met.getMeteors()
        
        //console.log(this.data)
        Object.entries(data_).forEach(([key,value]) => {
         if(typeof value == "object"){
          if(value.id){
            id =value.id 
            //console.log("data")
         }
         if(value.name){ 
          name =value.name 
       }
           this.getMeteorsData(params,value,id,name)
         }      
         if(params.includes(key)){
           this.result.push({id:id,name:name})
           this.result[this.result.length-1][key]=value
           //console.log(value)
         }   
       }); 
       
      //console.log(this.result)
       return this.result
     }
   }
   export default new Meteors()
