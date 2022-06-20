import React, { useContext, useState,useRef } from 'react'
import * as styles from './scss/All.Module.scss'
import Header from '../../../Components/MainWindowComponents/Private/Header'
import SendArea from '../../../Components/MainWindowComponents/Private/SendArea'
import PrivateChatComponent from '../../../Components/MainWindowComponents/Private/PrivateChatComponent'
import ProfileInfo from '../../../Components/MainWindowComponents/Private/ProfileInfo'
import PrivateImageViewer from './PrivateChatImageViewer.Context'
import ImageViewer from '../../../Components/MainWindowComponents/Private/ImageViewer'
import { useRivi } from '../../../Rivi.Context'
import Rivicon from '../../../Components/Icons/Rivicon'

const PrivateChat = () => {

    const [active, setActive] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const { selectedPrivateChat, setSelectedPrivateChat } = useRivi()

    // const [loadedData,setLoadedData] = useState(false)
    const chatWindow = useRef(0)

    const imageProvider = { active, setActive, imageUrl, setImageUrl}

    if(selectedPrivateChat===null){
        return null
    }

    const ToggleWindow = () => {
        const Appbar = document.getElementById("Appbar")
        const Appbody = document.getElementById("Appbody")
        Appbar.classList.remove("collapse")
        Appbody.style.opacity = "0.5"
        Appbody.style.transition = "0.4s"
        Appbody.style.pointerEvents = "none"
    }

    // console.log(dummyProfile.photos)
    return (
        <PrivateImageViewer.Provider value={imageProvider}>
            <div className={styles.privateImageViewer} style={active?{display:'unset'}:{display:'none'}}>
                <ImageViewer image={imageUrl} photoSet={selectedPrivateChat.photos} />
            </div>
        <div className={styles.privateChatMain} id="privateChatMain">
            <ProfileInfo profileInfo={selectedPrivateChat} />
            <div className={styles.chatWindowPanel} id="chatWindowPanel">
                <div className={styles.header} >
                    <span className={styles.back} onClick={()=>{ToggleWindow()}}>
                        <Rivicon i='ReturnIcon' s='35' mt={0} nav={false} selected={false} style={{cursor: 'pointer'}} />
                    </span>
                    <Header profilePic={selectedPrivateChat.profilePic} name={selectedPrivateChat.name} online={selectedPrivateChat.online} about={selectedPrivateChat.about} />
                </div>
                <div className={styles.chatWindow} ref={chatWindow}>
                    <PrivateChatComponent messages={selectedPrivateChat.conversation} chatWindow={chatWindow} />
                </div>
                <div className={styles.sendArea}>
                <SendArea />
                </div>
            </div>
        </div>
        </PrivateImageViewer.Provider>
    )
}
 
export default PrivateChat
