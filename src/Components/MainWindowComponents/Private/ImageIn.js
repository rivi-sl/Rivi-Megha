import React from 'react'
import * as styles from '../../../Pages/MainWindows/MainWindowStyles/PrivateChat.module.css'
import moment from 'moment'
import Linkify from 'react-linkify'

export const ImageIn = () => {
    const hrefDecorator = (href, text, key) => (
        <a href={href} key={key} target="_blank" className={styles.urlDecor}>
          {text}
        </a>
      );
    return (
        <div className={styles.chatInBoxImage}>
            <span>
                <img src="https://picsum.photos/720/1080?random=1" alt="Image Sent by Someone" />
            </span>
            <span><Linkify componentDecorator={hrefDecorator}>This is really cool image! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis accusamus veniam libero iste sed, consequatur iure, accusantium deleniti quas eligendi pariatur ipsam eos natus! Ducimus laudantium enim eius in nemo?</Linkify></span>
            <span className={styles.timeStampIn}>{moment(new Date()).format('LT')}</span>
        </div>
    )
}

export default ImageIn