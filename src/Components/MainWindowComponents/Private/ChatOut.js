import React, { useState } from 'react'
import * as styles from '../../../Pages/MainWindows/MainWindowStyles/PrivateChat.module.css'
import moment from "moment"
import { parser } from 'html-metadata-parser'

export const ChatOut = (props) => {
    const {message,lastUser,timeStamp} = props
    const checkForUrlToGetMetaTagData = (message_string) =>{
        let urlCheckerRegexExpression = /(?:https?|ftp):\/\/[\n\S]+/g
        if(urlCheckerRegexExpression.test(message_string)){
            var match = message_string.match(urlCheckerRegexExpression)
            console.log(match[0]);
            (async () => {
                var result = await parser('https://www.youtube.com/watch?v=eSzNNYk7nVU');
                console.log(JSON.stringify(result, null, 3));
            })();
            return true
        }
        else{
            return false
        }
        // return (urlCheckerRegexExpression.test(message_string));
    }
    const [metaTagState,setMetaTagState] = useState(checkForUrlToGetMetaTagData(message))
    // let newMessage = message + (checkForUrlToGetMetaTagData(message) ? ' This has URL Link' : null)

    return (
        <div className={lastUser ? styles.chatOutBoxWO : styles.chatOutBox}>
            <span>{message}</span>
            <span className={styles.timeStamp}>{moment(timeStamp).format('LT')}</span>
           {metaTagState ? <div className={styles.metaInfoSection}></div> : null}
        </div>
    )
}

export default ChatOut
