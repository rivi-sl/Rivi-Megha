import React, { useEffect, useRef, useState } from 'react'
import * as styles from '../../../Pages/MainWindows/MainWindowStyles/PrivateChat.module.css'
import ChatOut from './ChatOut'
import ChatIn from './ChatIn'
import ImageIn from './ImageIn'
import ImageOut from './ImageOut'
import VoiceMessageIn from './VoiceMessageIn'
import VoiceMessageOut from './VoiceMessageOut'
import NewDateDivider from '../NewDateDivider'
import Rivicon from '../../Icons/Rivicon'
import moment from 'moment'

export const PrivateChatComponent = (props) => {
    const {messages} = props
    const divRef = useRef(null);
    const [btnVisible,setButtonVisible] = useState(false)
    useEffect(()=>{divRef.current.scrollIntoView();},[])
    useEffect(() => {
        const chatWindow = document.getElementById('chatWindow')
        chatWindow.addEventListener('scroll',()=>{
            if(chatWindow.scrollHeight - chatWindow.scrollTop-100 <= chatWindow.clientHeight){
                setButtonVisible(false);
            }else{setButtonVisible(true)}
        })
      });
    const handleScrollToBottom = () => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    const isNotNewDay = (ld,d) => {return moment(ld).isSame(d,'day')}
    var lastUser = ''
    var lastDate = new Date()
    return (
        <React.Fragment>

            {messages && messages.map((message)=>{
                let lu = lastUser
                let ld = lastDate
                lastUser = message.senderId
                lastDate = new Date(message.timeStamp)
                if(isNotNewDay(ld,lastDate)){
                if(message.senderId === '0101010101' && message.type === 'textMessage'){
                    return <ChatOut message={message.message} lastUser={(message.senderId===lu)} timeStamp={message.timeStamp} />
                }else if(message.type === 'textMessage'){
                    return <ChatIn message={message.message} lastUser={(message.senderId===lu)} timeStamp={message.timeStamp} />
                }
                }else{

                    if(message.senderId === '0101010101' && message.type === 'textMessage'){
                        return (
                        <React.Fragment>
                            <NewDateDivider date={new Date(message.timeStamp)} />
                            <ChatOut message={message.message} lastUser={(message.senderId===lu)} timeStamp={message.timeStamp} />
                        </React.Fragment>
                        )
                    }else if( message.type === 'textMessage'){
                        return (
                        <React.Fragment>
                            <NewDateDivider date={new Date(message.timeStamp)} />
                            <ChatIn message={message.message} lastUser={(message.senderId===lu)} timeStamp={message.timeStamp} />
                        </React.Fragment>
                        )
                    }
                }
            })}
            <VoiceMessageIn />
            <VoiceMessageOut />
            <ImageIn />
            <ImageOut />
            <div ref={divRef} />
          <div className={styles.scrollDownButton} onClick={handleScrollToBottom} style={{opacity: btnVisible?'1':'0', transform: btnVisible? 'scale(0.9)':'scale(0.75)'}}>
                <Rivicon i='ChevronDownIcon' s='15' mt={0} nav={false} pl={10} pr={10} selected={false} />
            </div>  
        </React.Fragment>
    )
}

export default PrivateChatComponent