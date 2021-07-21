import React, { useContext } from 'react'
import * as styles from '../../../Pages/MainWindows/MainWindowStyles/PrivateChat.module.css'
import Rivicon from '../../Icons/Rivicon'
import PrivateImageViewer from '../../../Pages/MainWindows/PrivateChatImageViewer.Context'

export const ImageViewer = (props) => {
    const {setActive, setImageUrl} = useContext(PrivateImageViewer)
    const {image} = props
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
            <img src={image} alt="image" />
        </div>
    )
}

export default ImageViewer