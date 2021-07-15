import React from 'react'
import * as styles from './MainWindowStyles/PrivateChat.module.css'
import Header from '../../Components/MainWindowComponents/Private/Header'
import SendArea from '../../Components/MainWindowComponents/Private/SendArea'

const PrivateChat = () => {
    return (
        <React.Fragment>
            <div className={styles.header}>
                <Header profilePic={'https://avatars.githubusercontent.com/u/41909955?v=4'} name={'Chamindu Amarasinghe'} online={true} about={'Never forget who you are, because the rest of the world will never know'} />
            </div>
            <div className={styles.chatWindow}></div>
            <div className={styles.sendArea}>
            <SendArea />
            </div>
        </React.Fragment>
    )
}

export default PrivateChat
