import * as dotenv from "dotenv";
import { createWriteStream } from "fs";
import fetch from "node-fetch";
import { pipeline } from "stream";
import util from "util";
import path, { dirname } from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

class Photos {
  NasaApikey;
  Date;
  data;
  constructor() {
    this.NasaApikey = process.env.KEY;
  }
  async getData() {
    let dateMethod = new Date();
    dateMethod.setDate(dateMethod.getDate() - 5);
    let date = `${dateMethod.getFullYear()}-${
      dateMethod.getMonth() + 1
    }-${dateMethod.getDate()}`;
    let urlDate = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=0ggNEPtbcREDB69ukj6M8uLioWEFILGu4GMUEM62`;
    let { value, error } = await this.getPhotoRequest(urlDate);
    if (error) {
      console.log(error);
    } else {
      this.data = value;
      return this.data;
    }
  }
  async getPhotoRequest(date) {
    const result = {
      value: null,
      error: null,
    };
    try {
      const nasa = await fetch(date); //||this.api)
      const data = await nasa.json();
      if (data) {
        result.value = data;
        return result;
      } else {
        result.error = new Error("error");
      }
    } catch (error) {
      console.log(error);
      result.error = error;
      console.log("Whoops!   PhotoRequest is not working");
      return result;
    }
  }

  async getPhoto(url) {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await fetch(url);
      if (!response.ok) {
        result.error = new Error("getPhoto is not working");
        return result;
      } else {
        const streamPipeline = util.promisify(pipeline);
        await streamPipeline(
          response.body,
          createWriteStream("./nasaPhoto.png")
        );
        let img = "D:/proxy_server/nasaPhoto.png"; //__dirname + './nasaPhoto.png'
        result.value = img;
        return result;
      }
    } catch (error) {
      console.log(error);
      //throw new Error("Whoops!");
      result.error = error;
      console.log("Whoops!   GettingPhoto is not working");
      return result;
    }
  }
}
export default new Photos();
