import React, {useContext, useState} from 'react'
import * as styles from '../../../Styles/PrivateSubWindow.module.css'
import PrivateContact from './PrivateContact'
// import Rivi from '../../../Rivi.Context'

const PrivateContactList = (props) => {
    const {chatData,triggerChangeChat} = props
    const [selectedChat,setSelectedChat] = useState(1)
    // const { selectedPrivateChat, setSelectedPrivateChat } = useContext(Rivi)
    return (
        <div className={styles.privateContactList}>
            <div className={styles.contactList}>
                {chatData && chatData.map((chat)=>{
                    return(
                        <div key={chat.id} 
                        className={selectedChat===chat.id ? styles.contact_selected : styles.contact} 
                        onClick={()=>{
                            setSelectedChat(chat.id)
                            triggerChangeChat(chat.id)
                            }}>
                            <PrivateContact selected={selectedChat===chat.id} name={chat.name} profile={chat.profilePic} timeStamp={chat.timeStamp} lastSMS={chat.lastSMS} online={chat.online} unread={chat.unreadMessages} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PrivateContactList
