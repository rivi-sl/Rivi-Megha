import React, { useContext, useEffect, useRef, useState } from 'react'
import * as styles from '../../../Pages/MainWindows/MainWindowStyles/PrivateChat.module.css'
import ChatOut from './ChatOut'
import ChatIn from './ChatIn'
import ImageIn from './ImageIn'
import ImageOut from './ImageOut'
import VoiceMessageIn from './VoiceMessageIn'
import VoiceMessageOut from './VoiceMessageOut'
import NewDateDivider from './NewDateDivider'
import Rivicon from '../../Icons/Rivicon'
import moment from 'moment'
import Rivi from '../../../Rivi.Context'

export const PrivateChatComponent = (props) => {
    const {messages} = props
    const divRef = useRef(null);
    const [btnVisible,setButtonVisible] = useState(false)
    const {userData} = useContext(Rivi)
    // useEffect(()=>{divRef.current.scrollIntoView();},[])
        const chatWindow = document.getElementById('chatWindow')
        // chatWindow.addEventListener('scroll',()=>{
        //     if(chatWindow.scrollHeight - chatWindow.scrollTop-100 <= chatWindow.clientHeight){
        //         setButtonVisible(false);
        //     }else{setButtonVisible(true)}
        // })
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
                    switch(message.type) {
                        case 'textMessage':
                            if(message.senderId === userData.userId){
                                return <ChatOut message={message.message} lastUser={(message.senderId===lu)} timeStamp={message.timeStamp} />
                            }else{
                                return <ChatIn message={message.message} lastUser={(message.senderId===lu)} timeStamp={message.timeStamp} />
                            }
                        case 'mediaPhoto':
                            if(message.senderId === userData.userId){
                                return <ImageOut message={message.message} timeStamp={message.timeStamp} photoLink={message.photoLink} />
                            }else{
                                return <ImageIn message={message.message} timeStamp={message.timeStamp} photoLink={message.photoLink} />
                            }
                        case 'voiceMessage':
                            if(message.senderId === userData.userId){
                                return <VoiceMessageOut timeStamp={message.timeStamp} voiceMessage={message.voiceMessage} />
                            }else{
                                return <VoiceMessageIn timeStamp={message.timeStamp} voiceMessage={message.voiceMessage} />
                            }
                        default:
                          return null
                      }
                }else{
                    switch(message.type) {
                        case 'textMessage':
                            if(message.senderId === userData.userId){
                                return (
                                <React.Fragment>
                                    <NewDateDivider date={new Date(message.timeStamp)} />
                                    <ChatOut message={message.message} lastUser={(message.senderId===lu)} timeStamp={message.timeStamp} />
                                </React.Fragment>
                                )
                            }else{
                                return (
                                <React.Fragment>
                                    <NewDateDivider date={new Date(message.timeStamp)} />
                                    <ChatIn message={message.message} lastUser={(message.senderId===lu)} timeStamp={message.timeStamp} />
                                </React.Fragment>
                                )
                            }
                          case 'mediaPhoto':
                            if(message.senderId === userData.userId){
                                return (
                                <React.Fragment>
                                    <NewDateDivider date={new Date(message.timeStamp)} />
                                    <ImageOut message={message.message} timeStamp={message.timeStamp} photoLink={message.photoLink} />
                                </React.Fragment>
                                )
                            }else{
                                return (
                                <React.Fragment>
                                    <NewDateDivider date={new Date(message.timeStamp)} />
                                    <ImageIn message={message.message} timeStamp={message.timeStamp} photoLink={message.photoLink} />
                                </React.Fragment>
                                )
                            }
                          case 'voiceMessage':
                                if(message.senderId === userData.userId){
                                    return (
                                    <React.Fragment>
                                        <NewDateDivider date={new Date(message.timeStamp)} />
                                        <VoiceMessageOut timeStamp={message.timeStamp} voiceMessage={message.voiceMessage} />
                                    </React.Fragment>
                                    )
                                }else{
                                    return (
                                    <React.Fragment>
                                        <NewDateDivider date={new Date(message.timeStamp)} />
                                        <VoiceMessageIn timeStamp={message.timeStamp} voiceMessage={message.voiceMessage} />
                                    </React.Fragment>
                                    )
                                }
                        default:
                          return null
                      }
                }
            })}
            <div ref={divRef} />
          <div className={styles.scrollDownButton} onClick={handleScrollToBottom} style={{opacity: btnVisible?'1':'0', transform: btnVisible? 'scale(0.9)':'scale(0.75)'}}>
                <Rivicon i='ChevronDownIcon' s='15' mt={0} nav={false} pl={10} pr={10} selected={false} />
            </div>  
        </React.Fragment>
    )
}

export default PrivateChatComponent