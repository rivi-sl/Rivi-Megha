import React from 'react'
import * as styles from './scss/All.module.scss'
import moment from 'moment'
import Linkify from 'react-linkify'

export const ImageIn = (props) => {
    const {message,photoLink,timeStamp} = props
    const hrefDecorator = (href, text, key) => (
        <a href={href} key={key} target="_blank" className={styles.urlDecor}>
          {text}
        </a>
      );
    return (
        <div className={styles.chatInBoxImage}>
            <span>
                <img src={photoLink} alt="Image Sent by Someone" />
            </span>
            <span><Linkify componentDecorator={hrefDecorator}>{message}</Linkify></span>
            <span className={styles.timeStamp}>{moment(new Date(timeStamp)).format('LT')}</span>
        </div>
    )
}

export default ImageIn