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
        let {value,error} = await Repository.Photos.getPhotoRequest(this.urlDate)
        if(error){
          console.log(error)
        }else{
        this.data = value
        return this.data
        }
       }

        setDate(){
      this.dateMethod.setDate(this.dateMethod.getDate()-6)
      let date = `${this.dateMethod.getFullYear()}-${this.dateMethod.getMonth()+1}-${this.dateMethod.getDate()}`
      return date
     }

  // async photoCase(){
  //   const{value, error} = Repository.Photos.getPhoto()
  // }

async getPhotosData(params,data_,) {
  const result = {
          value : null,
          error : null
        }
        try{
          if(data_) {
    Object.entries(data_).forEach(([key,value]) => {
     if(typeof value == "object"){
      if(value.img_src){
        this.image =value.img_src 
     }
       this.getPhotosData(params,value)
     }       
   });  
   result.value = this.image
   return result.value
 }
 else{
  console.log('Whoops!   getPhotosData is not working')
 }
}
 catch(error){
  console.log(error)
  result.error = error
  return result.error
    }
  }
}
export default new Photo()