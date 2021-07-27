import React, { useContext, useRef } from 'react'
import * as styles from '../../../Pages/MainWindows/MainWindowStyles/PrivateChat.module.css'
import Rivicon from '../../Icons/Rivicon'
import PrivateImageViewer from '../../../Pages/MainWindows/PrivateChatImageViewer.Context'

export const ImageViewer = (props) => {
    const {setActive, imageUrl, setImageUrl} = useContext(PrivateImageViewer)
    const {image,photoSet} = props
    const findPhotoFromId = (ps,id)=>{
        if(id){
        let obj = ps.find(photo => photo.imageId === id)
        return obj.photoLink
        }
    }
    const pictureList = useRef([]);
    return (
        <div className={styles.imageViewer}>
            <div className={styles.imageViewerCloseButton}
                onClick={()=>{
                    setActive(false)
                    setImageUrl('')
                }}
            >
                <Rivicon i='CloseIcon' s='17.5' mt={0} nav={false} pl={10} pr={10} selected={false} />
            </div>
            <img src={findPhotoFromId(photoSet,image)} alt="image" />
            <div className={styles.imageSlider}>
               { photoSet && photoSet.map((photo,index)=>{
                    return(<div ref={() => (pictureList.current[`${photo.imageId}`] = photo.imageId)} style={{backgroundImage:`url('${photo.photoLink}')`,border:(imageUrl===photo.imageId?`2px solid #DE4B1E`:null)}}
                    onClick={() => {
                        setImageUrl(photo.imageId)
                        console.log(pictureList)
                    }}
                    ></div>)
               })   
               }
            </div>
        </div>
    )
}

export default ImageViewer