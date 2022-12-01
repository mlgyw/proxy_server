import Repository from '../../repository/index.js';

class Photo{
data
dateMethod
date
urlDate
image
result

  constructor(){
    this.dateMethod = (new Date())
    this.date = this.setDate()
    this.urlDate =`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.date}&api_key=0ggNEPtbcREDB69ukj6M8uLioWEFILGu4GMUEM62`
  }
        
    async getData(){
        let data = await Repository.Photos.getPhotoRequest(this.urlDate)
        this.data = data
        return this.data
       }

        setDate(){
      this.dateMethod.setDate(this.dateMethod.getDate()-5)
      let date = `${this.dateMethod.getFullYear()}-${this.dateMethod.getMonth()+1}-${this.dateMethod.getDate()}`
      console.log(date)
      return date
     }

async getPhotosData(params,data_,) {  
    Object.entries(data_).forEach(([key,value]) => {
     if(typeof value == "object"){
      if(value.img_src){
        this.image =value.img_src 
     }
       this.getPhotosData(params,value)
     }       
   }); 
   return this.image
 }
}
export default new Photo()