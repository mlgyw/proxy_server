
const getMeteorsData = (receivedData) => {
    Object.entries(receivedData).forEach(([key,value]) => {
      if(typeof value == "object"){
        getMeteorsData(value)
      }
      if(props.includes(key)){
        if(key=="id"){
        result.push({})
      }
        result[result.length-1][key]=value;
      }
      
    });
  }

 export default getMeteorsData;