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
  constructor() {
    this.NasaApikey = process.env.KEY;
  }
  async getDate() {
    let dateMethod = new Date();
    dateMethod.setDate(dateMethod.getDate() - 5);
    let date = `${dateMethod.getFullYear()}-${
      dateMethod.getMonth() + 1
    }-${dateMethod.getDate()}`;
    return date;
  }
  async getData(date) {
    let urlDate = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=0ggNEPtbcREDB69ukj6M8uLioWEFILGu4GMUEM62`;
    let { value, error } = await this.getPhotoRequest(urlDate);
    if (error) {
      console.log(error);
    } else {
      return value;
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
        let img = "D:/proxy_server/nasaPhoto.png"; //TODO: Enable in future //__dirname + './nasaPhoto.png'
        result.value = img;
        return result;
      }
    } catch (error) {
      console.log(error);
      result.error = error;
      console.log("Whoops!   GettingPhoto is not working");
      return result;
    }
  }
  async getLink(data_) {
    const result = {
      value: null,
      error: null,
    };
    try {
      if (data_) {
        Object.entries(data_).forEach(([key, value]) => {
          if (typeof value == "object") {
            if (value.img_src) {
              this.image = value.img_src;
            }
            this.getLink(value);
          }
        });
        result.value = this.image;
        return result.value;
      } else {
        console.log("Whoops!   getPhotosData is not working");
      }
    } catch (error) {
      console.log(error);
      result.error = error;
      return result.error;
    }
  }
  async getPhotosData() {
    const date = await this.getDate();
    const data = await this.getData(date);
    const photoData = await this.getLink(data);
    let { value, error } = await this.getPhoto(photoData);
    if (error) {
      return error;
    } else {
      return value;
    }
  }
}
export default new Photos();
