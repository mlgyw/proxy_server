import * as dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

class NasaApi {
  key;
  url;
  api;
  urlDate;
  data;
  constructor() {
    this.key = process.env.KEY;
    this.url = process.env.URL;
    this.api = this.url + this.key;
  }
  getDate(startDate, endDate) {
    if (startDate && endDate) {
      this.urlDate =
        "https://api.nasa.gov/neo/rest/v1/feed?start_date=" +
        startDate +
        "&end_date=" +
        endDate +
        "&api_key=" +
        this.key;
    } else {
      console.log("ReposirotyGetDate params is not valid");
    }
  }
  async getMeteorsRequest() {
    const result = {
      value: null,
      error: null,
    };
    try {
      const nasa = await fetch(this.urlDate || this.api);
      const data = await nasa.json(); //null
      // return data;
      if (data) {
        result.value = data;
        //console.log(typeof result.error)
        return result;
      } else {
        console.log("Whoops!   NasaApi is not working");
      }
    } catch (error) {
      console.log(error);
      //throw new Error("Whoops!");
      result.error = error;
      //console.log("Whoops!   NasaApi is not working")
      return result;
    }
  }
}
export default new NasaApi();
