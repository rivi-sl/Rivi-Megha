import React, { useContext, useState,useRef } from 'react'
import * as styles from './MainWindowStyles/PrivateChat.module.css'
import Header from '../../Components/MainWindowComponents/Private/Header'
import SendArea from '../../Components/MainWindowComponents/Private/SendArea'
import PrivateChatComponent from '../../Components/MainWindowComponents/Private/PrivateChatComponent'
import ProfileInfo from '../../Components/MainWindowComponents/Private/ProfileInfo'
import PrivateImageViewer from './PrivateChatImageViewer.Context'
import ImageViewer from '../../Components/MainWindowComponents/Private/ImageViewer'
import Rivi from '../../Rivi.Context'

const PrivateChat = () => {

    const [active, setActive] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const { selectedPrivateChat, setSelectedPrivateChat } = useContext(Rivi)

    // const [loadedData,setLoadedData] = useState(false)
    const chatWindow = useRef(0)

    const handleToggleProfile = () => {
        const profileInfoSection = document.getElementById("profileInfoSection")
        profileInfoSection.style.display = "flex"
    }

    const imageProvider = { active, setActive, imageUrl, setImageUrl}
    // console.log(dummyProfile.photos)
    return (
        <PrivateImageViewer.Provider value={imageProvider}>
            <div className={styles.privateImageViewer} style={active?{display:'unset'}:{display:'none'}}>
                <ImageViewer image={imageUrl} photoSet={selectedPrivateChat.photos} />
            </div>
        <div className={styles.privateChatMain} id="privateChatMain">
            <ProfileInfo profileInfo={selectedPrivateChat} />
            <div className={styles.chatWindowPanel} id="chatWindowPanel">
                <div className={styles.header} onClick={()=>{handleToggleProfile()}}>
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
