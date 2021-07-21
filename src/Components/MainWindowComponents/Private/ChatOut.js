import React from 'react'
import * as styles from '../../../Pages/MainWindows/MainWindowStyles/PrivateChat.module.css'
import moment from "moment"

export const ChatOut = (props) => {
    const {message,lastUser,timeStamp} = props
    return (
        <div className={lastUser ? styles.chatOutBoxWO : styles.chatOutBox}>
            <span>{message}</span>
            <span className={styles.timeStamp}>{moment(timeStamp).format('LT')}</span>
        </div>
    )
}

export default ChatOut
