import React from 'react'
import * as styles from '../../../Pages/MainWindows/MainWindowStyles/PrivateChat.module.css'
import Rivicon from '../../Icons/Rivicon'

const SendArea = () => {
    return (
        <React.Fragment>
            <div className={styles.sendBox}>
                <Rivicon i='MicIcon' s='15' mt={0} nav={false} pl={10} pr={10} selected={false} />
                <Rivicon i='AttachIcon' s='22' mt={0} nav={false} pl={10} pr={10} selected={false} />
                <Rivicon i='EmoticonIcon' s='22' mt={0} nav={false} pl={10} pr={10} selected={false} />
                <input className={styles.inputMessage} type="text" name="" id="" placeholder='Type a message here...' />
                <div className={styles.sendBtn}>
                    <Rivicon i='SendIcon' s='20' mt={0} nav={false} selected={false} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default SendArea
