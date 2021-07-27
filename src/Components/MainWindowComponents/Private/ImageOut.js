import React from 'react'
import * as styles from '../../../Pages/MainWindows/MainWindowStyles/PrivateChat.module.css'
import moment from 'moment'

export const ImageOut = () => {
    return (
        <div className={styles.chatOutBoxImage}>
            <span>
                {/* <img src="https://picsum.photos/1080/720?random=1" alt="Image Sent by Someone" /> */}
                <img src="https://picsum.photos/1080/720?random=1" alt="Image Sent by Someone" />
            </span>
            <span>This is really cool image! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis accusamus veniam libero iste sed, consequatur iure, accusantium deleniti quas eligendi pariatur ipsam eos natus! Ducimus laudantium enim eius in nemo?</span>
            <span className={styles.timeStamp}>{moment(new Date()).format('LT')}</span>
        </div>
    )
}

export default ImageOut