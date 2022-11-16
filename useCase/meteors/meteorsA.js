import { MeteorsR } from './../../repository/meteors/meteorsR.js';
export class MeteorsA{ 

//   props=[]
//  getProps(props){ должны прийти query параметры 
//   this.props=props
//  }
  //(params.date||this.met.api)
   result = []
  async getMeteorsData(data, params,id,name) {  
    //const met = new MeteorsR()
    
     //console.log(data +"  "+params)
    // console.log(props)
     
      //console.log(data)
      //console.log(Object.entries(data))
      
      Object.entries(data).forEach(([key,value]) => {
      
       if(typeof value == "object"){
       
        if(value.id){
          id =value.id //value["id"]

       }
       if(value.name){
        name =value.name //value["id"]

     }

         this.getMeteorsData(value,params,id,name)
       }  
       
       if(params.includes(key)){
        // const index = this.idIndex(id);
        // console.log(index)
        // if (index>-1){
        //   this.result[index][key]=value

        // }
        // else{
         //if(key=="id"){
         this.result.push({id:id,name:name})
         this.result[this.result.length-1][key]=value
         console.log(value)
        // }
        //console.log("3 иф")
        //  if(this.result[this.result.length-1]){
        //  this.result[this.result.length-1][key]=value
        // }
       }   
     });
     
     return this.result
     
   }
  //  idIndex(id){
  //  return this.result.indexOf((obj)=>{
  //     return obj.id === id
  //   })
  //  }

 }