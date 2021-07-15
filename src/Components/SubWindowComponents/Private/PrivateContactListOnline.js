import React, {useState} from 'react'
import * as styles from '../../../Styles/PrivateSubWindow.module.css'
import PrivateContact from './PrivateContact'

const PrivateContactListOnline = (props) => {
    const {chatData} = props
    const [selectedChat,setSelectedChat] = useState(1)

    return (
        <div className={styles.privateContactList}>
            <div className={styles.contactList}>
                {chatData && chatData.map((chat)=>{
                    if(chat.online){
                    return(
                        <div key={chat.id} 
                        className={selectedChat===chat.id ? styles.contact_selected : styles.contact} 
                        onClick={()=>{setSelectedChat(chat.id)}}>
                            <PrivateContact selected={selectedChat===chat.id} name={chat.name} profile={chat.profilePic} timeStamp={chat.timeStamp} lastSMS={chat.lastSMS} online={chat.online} unread={chat.unreadMessages} />
                        </div>
                    )
                    }
                })}
            </div>
        </div>
    )
}

export default PrivateContactListOnline
