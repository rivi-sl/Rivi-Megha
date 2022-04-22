import React, { useRef, useState } from 'react'
import * as styles from './scss/All.module.scss'
import Rivicon from '../../Icons/Rivicon'

const SendArea = () => {
    const attachDoc = useRef(0)
    const [attachButtonState,setAttachButtonState] = useState(false) 
    const handleToggleAttachButtonCaller = () => {
        if(attachButtonState){
            setAttachButtonState(!attachButtonState)
            attachDoc.current.style.transform = 'translateY(55px)'
        }else{
            setAttachButtonState(!attachButtonState)
            attachDoc.current.style.transform = 'translateY(0px)'
        }
    }
    return (
        <React.Fragment>
            <div className={styles.sendBox}>
                <Rivicon i='MicIcon' s='15' mt={0} nav={false} pl={10} pr={10} selected={false} style={{cursor: 'pointer'}} />
                <div onClick={handleToggleAttachButtonCaller}><Rivicon i={'AttachIcon'} s='22' mt={0} nav={false} pl={10} pr={10} selected={false} style={{cursor: 'pointer'}} /></div>
                <Rivicon i='EmoticonIcon' s='22' mt={0} nav={false} pl={10} pr={10} selected={false} style={{cursor: 'pointer'}} />
                <input className={styles.inputMessage} type="text" name="" id="" placeholder='Type a message here...' />
                <div className={styles.sendBtn}>
                    <Rivicon i='SendIcon' s='20' mt={0} nav={false} selected={false} />
                </div>
                <div style={{display:attachButtonState?'unset':'none'}} className={styles.attachButtonWrapper} onClick={handleToggleAttachButtonCaller}></div>
                <div className={attachButtonState ? styles.attachButtonsWindowOpen :styles.attachButtonsWindow}>
                    <div ref={attachDoc} className={styles.attachDocumentButton} onClick={()=>{console.log('Doc Button Works')}}>
                        <Rivicon i='DocumentIcon' s='15' mt={0} nav={false} pl={10} pr={10} selected={false} />
                    </div>  
                    <div  className={styles.attachImageButton} onClick={()=>{console.log('Photo Button Works')}}>
                        <Rivicon i='PhotoIcon' s='15' mt={0} nav={false} pl={10} pr={10} selected={false} />
                    </div>  
                </div>
            </div>
        </React.Fragment>
    )
}

export default SendArea
