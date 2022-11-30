import repository from '../../repository/index.js';
class marsPhotos{
        dateMethod = (new Date())//.toLocaleDateString()//('ko-KR')
       //words = this.a.setDate(this.a.getDate()-2)//split('.').reverse();
       
       //strWords = this.words.join('-')
      // console.log(strWords)
      // var d = new Date();
      // d.setDate(d.getDate()-5);

      //2 проблеммы blob не фурычит с рекрсией, и хз как от даты 2 отнять 
    data =[]
    date = this.setDate()
    urlDate =`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.date}&api_key=0ggNEPtbcREDB69ukj6M8uLioWEFILGu4GMUEM62` //здесь сделать +date+ и добавитьмодуль с деливери так же это должео быть не тут а в репозитории
//date_
    async getData(){
        let data = await repository.Photos.getPhotoRequest(this.urlDate)
        //console.log("2"+this.date)
        this.data = data
        return this.data
        
        //console.log(this.date)
       }
        setDate(){
      // ww = (new Date()).toLocaleDateString()
      // words = ww.split('.').reverse();
      // str = words.join('-')
      //console.log(this.dateMethod)
      this.dateMethod.setDate(this.dateMethod.getDate()-5)
      //console.log(this.dateMethod)
      let date = `${this.dateMethod.getFullYear()}-${this.dateMethod.getMonth()+1}-${this.dateMethod.getDate()}`
      console.log(date)
      return date
    //   //console.log(strWords)
     }
    result = []
    image = []
   
async getPhotosData(params,data_,) {  
  // this.words[2] = +this.words[2]-2
    
    // const met = MeteorsReposytory
    //  const data = await met.getMeteors()

    //console.log(this.data)
    
    Object.entries(data_).forEach(([key,value]) => {
     if(typeof value == "object"){
      if(value.img_src){
        this.image =value.img_src 
        //this.result.push({img_src:img_src})
        //console.log(this.image)
     }
       this.getPhotosData(params,value)
     }       
   }); 
   
  //console.log(this.result)
   return this.image
 }
}
export default new marsPhotos()