const photoArrayBuilder = (c) => {
    let arr = []
    for(let i=0;i<c; i++){
        arr.push(`https://picsum.photos/1080/720?random=${i+1}`)
    }
    return arr
}

const photoArray = photoArrayBuilder(21)

const dummyProfile = {
    name: "Aditha Abeynayake",
    profilePic: "https://i.ibb.co/RHZkLvc/pp.jpg",
    about: "[whistles furiously]",
    photos: photoArray,
    online: true,
}

export default dummyProfile

