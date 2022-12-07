import Repository from "../../repository/index.js";

class Photo {
  data;
  dateMethod;
  date;
  urlDate;
  image;
  constructor() {
    this.dateMethod = new Date();
  }
  async getPhotosData(data_) {
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
            this.getPhotosData(value);
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
  async setData() {
    const data = await Repository.Photos.getData();
    const photoData = await this.getPhotosData(data);
    let { value, error } = await Repository.Photos.getPhoto(photoData);
    if (error) {
      return error;
    } else {
      //error = new Error("error");
      return value;
    }
  }
}
export default new Photo();
