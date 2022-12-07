import NasaApi from "./meteors/index.js";
import Photos from "./marsPhotos/index.js";

class Repository {
  NasaApi;
  Photos;
  constructor() {
    this.NasaApi = NasaApi;
    this.Photos = Photos;
  }
}
export default new Repository();
