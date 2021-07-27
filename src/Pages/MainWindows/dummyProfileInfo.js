import { v4 as uuidv4 } from 'uuid'

const photoArrayBuilder = (c) => {
    let arr = []
    for(let i=0;i<c; i++){
        if(i%2===0){
        arr.push({photoLink:`https://picsum.photos/1080/720?random=${i+1}`,imageId:uuidv4()})
        }else{
        arr.push({photoLink:`https://picsum.photos/720/1080?random=${i+1}`,imageId:uuidv4()})   
        }
    }
    return arr
}

const photoArray = photoArrayBuilder(21)

const dummyProfile = {
    name: "Chamindu Amarasinghe",
    profilePic: "https://avatars.githubusercontent.com/u/41909955?v=4",
    about: "😁 Never forget who you are, because the rest of the world will never know",
    photos: photoArray,
    online: true,
}

export default dummyProfile

