import React from 'react'
import * as styles from '../../../Pages/MainWindows/MainWindowStyles/PrivateChat.module.css'
import moment from 'moment'

export const ChatIn = (props) => {
    const {message,lastUser,timeStamp} = props
    return (
        <div className={lastUser ? styles.chatInBoxWO : styles.chatInBox}>
            <span>{message}</span>
            <span className={styles.timeStampIn}>{moment(timeStamp).format('LT')}</span>
        </div>
    )
}

export default ChatIn
