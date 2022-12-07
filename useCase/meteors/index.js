import Repository from "../../repository/index.js";

class Meteors {
  constructor() {}
  result = [];
  data = [];
  
  async getMeteorsData(params, data_, id, name) {
    const result = {
      value: null,
      error: null,
    };
    try {
      if (params != null && data_ != null) {
        Object.entries(data_).forEach(([key, value]) => {
          if (typeof value == "object") {
            if (value.id) {
              id = value.id;
            }
            if (value.name) {
              name = value.name;
            }
            this.getMeteorsData(params, value, id, name);
          }
          if (params.includes(key)) {
            this.result.push({ id: id, name: name });
            this.result[this.result.length - 1][key] = value;
          }
        });
        result.value = this.result;
        return result;
        //return this.result
      } else {
        result.error = new Error("error")
        console.log("Whoops!   getMeteorsData is not working");
        return error
      }
    } catch (error) {
      console.log(error);
      result.error = error;
      return result;
    }
  }
  async setData(params,startDate, endDate){
    let result = {
      value: null,
      error: null,
    };
    let data = {
      value: null,
      error: null,
    };
    Repository.NasaApi.getDate(startDate, endDate);
    data = await Repository.NasaApi.getMeteorsRequest();
    result = await this.getMeteorsData(params,data.value) 
    if(result.value){
      return result
    }else{
      result.error = new Error("error")
      return result
    }
    
  }
}
export default new Meteors();
