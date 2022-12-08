import * as dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

class NasaApi {
  key;
  url;
  api;
  result;
  constructor() {
    this.key = process.env.KEY;
    this.url = process.env.URL;
    this.api = this.url + this.key;
    this.result = [];
  }
  async getMeteorsRequest(startDate, endDate) {
    let urlDate =
      "https://api.nasa.gov/neo/rest/v1/feed?start_date=" +
      startDate +
      "&end_date=" +
      endDate +
      "&api_key=" +
      this.key;
    const result = {
      value: [],
      error: null,
    };
    try {
      const nasa = await fetch(urlDate || this.api);
      const data = await nasa.json();
      if (data) {
        result.value = data;
        return result;
      } else {
        console.log("Whoops!   NasaApi is not working");
      }
    } catch (error) {
      console.log(error);
      result.error = error;
      return result;
    }
  }
  async getDatabyParams(params, data_, id, name) {
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
            this.getDatabyParams(params, value, id, name);
          }
          if (params.includes(key)) {
            this.result.push({ id: id, name: name });
            this.result[this.result.length - 1][key] = value;
          }
        });
        result.value = this.result;
        return result;
      } else {
        result.error = new Error("error");
        console.log("Whoops!   getDatabyParams is not working");
        return error;
      }
    } catch (error) {
      console.log(error);
      result.error = error;
      return result;
    }
  }
  async getMeteorsData(params, startDate, endDate) {
    let data = await this.getMeteorsRequest(startDate, endDate);
    return await this.getDatabyParams(params, data.value);
  }
}
export default new NasaApi();
