import Repository from "../../repository/index.js";

class Meteors {
  constructor() {}
  async Meteors(params, startDate, endDate) {
    let result = {
      value: null,
      error: null,
    };
    result = await Repository.NasaApi.getMeteorsData(
      params,
      startDate,
      endDate
    );
    if (result.value) {
      return result;
    } else {
      result.error = new Error("error");
      return result;
    }
  }
}
export default new Meteors();
