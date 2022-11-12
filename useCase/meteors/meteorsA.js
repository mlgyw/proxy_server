export class MeteorsA{
    props = ["id","name",'meters',"is_potentially_hazardous_asteroid",'kilometers_per_hour','close_approach_date_full']
 // constructor(params) {
   
 // }
 getMeteorsData(receivedData,result) {
     
     Object.entries(receivedData).forEach(([key,value]) => {
       if(typeof value == "object"){
         this.getMeteorsData(value,result)
       }   
       if(this.props.includes(key)){
         if(key=="id"){
         result.push({})
       }
         result[result.length-1][key]=value;
       }
       
       
     });
     
   }
   
 }