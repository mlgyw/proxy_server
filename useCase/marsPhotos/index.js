import Repository from "../../repository/index.js";

class Photo {
  constructor() {}

  async PhotoData() {
    let value = await Repository.Photos.getPhotosData();
    if (value) {
      return value;
    } else {
      return (error = new Error("setData is not working"));
    }
  }
}
export default new Photo();
