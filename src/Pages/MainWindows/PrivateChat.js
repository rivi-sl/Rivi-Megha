import React, { useState } from 'react'
import * as styles from './MainWindowStyles/PrivateChat.module.css'
import Header from '../../Components/MainWindowComponents/Private/Header'
import SendArea from '../../Components/MainWindowComponents/Private/SendArea'
import PrivateChatComponent from '../../Components/MainWindowComponents/Private/PrivateChatComponent'
import ProfileInfo from '../../Components/MainWindowComponents/Private/ProfileInfo'
import dummyMessages from './dummyConvo.js'
import dummyProfile from './dummyProfileInfo.js'
import PrivateImageViewer from './PrivateChatImageViewer.Context'
import ImageViewer from '../../Components/MainWindowComponents/Private/ImageViewer'

const PrivateChat = () => {

    const [active, setActive] = useState(false)
    const [imageUrl, setImageUrl] = useState('')

    const handleToggleProfile = () => {
        const profileInfoSection = document.getElementById("profileInfoSection")
        profileInfoSection.style.display = "flex"
    }

    const imageProvider = { active, setActive, imageUrl, setImageUrl}
    // console.log(dummyProfile.photos)
    return (
        <PrivateImageViewer.Provider value={imageProvider}>
            <div className={styles.privateImageViewer} style={active?{display:'unset'}:{display:'none'}}>
                <ImageViewer image={imageUrl} photoSet={dummyProfile.photos} />
            </div>
        <div className={styles.privateChatMain} id="privateChatMain">
            <ProfileInfo profileInfo={dummyProfile} />
            <div className={styles.chatWindowPanel} id="chatWindowPanel">
                <div className={styles.header} onClick={()=>{handleToggleProfile()}}>
                    <Header profilePic={dummyProfile.profilePic} name={dummyProfile.name} online={dummyProfile.online} about={dummyProfile.about} />
                </div>
                <div className={styles.chatWindow} id="chatWindow">
                    <PrivateChatComponent messages={dummyMessages} />
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
