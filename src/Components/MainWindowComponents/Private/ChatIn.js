import React, { useState } from 'react'
import * as styles from '../../../Pages/MainWindows/MainWindowStyles/PrivateChat.module.css'
import moment from 'moment'
import Linkify from 'react-linkify'

export const ChatIn = (props) => {
    const {message,lastUser,timeStamp} = props
    const [metaData,setMetaData] = useState({})
    const checkForUrlToGetMetaTagData = (message_string) =>{
        let urlCheckerRegexExpression = /(?:https?|ftp):\/\/[\n\S]+/g
        if(urlCheckerRegexExpression.test(message_string)){
            var match = message_string.match(urlCheckerRegexExpression)
            let url = match[0]
            return true
        }
        else{
            return false
        }
    }
    const [metaTagState,setMetaTagState] = useState(checkForUrlToGetMetaTagData(message))
    const hrefDecorator = (href, text, key) => (
        <a href={href} key={key} target="_blank" className={styles.urlDecor}>
          {text}
        </a>
      );
    return (
        <div className={lastUser ? styles.chatInBoxWO : styles.chatInBox}>
           <span><Linkify componentDecorator={hrefDecorator}>{message}</Linkify></span>
            <span className={styles.timeStampIn}>{moment(timeStamp).format('LT')}</span>
            {metaTagState ? <div className={styles.metaInfoSection}>
                <img src="https://i.ibb.co/Jd2xvP2/website-Preloader-Thumbnail.png" alt="imagePreloader" />
                <div>
                    <span className={styles.metaTitle}>Web Link Previewer</span>
                    <span className={styles.metaDescription}>This is Sample Web Link Previewer and this is the long description</span>
                </div>
           </div> : null}
        </div>
    )
}

export default ChatIn
