import React, {useContext, useEffect, useState} from 'react'
import * as styles from '../SubWindowStyles/Private.module.css'
import Rivicon  from '../../../Components/Icons/Rivicon'
import PrivateContactList from '../../../Components/SubWindowComponents/Private/PrivateContactList'
import PrivateContactListOnline from '../../../Components/SubWindowComponents/Private/PrivateContactListOnline'
import Rivi from '../../../Rivi.Context'
import {ContactDataExplorer,ContactDataReciever} from './PrivateFunctions/ContactData.Explorer'

const PrivateSubWindow = () => {
    const [tab,toggleTab] = useState('allCon')
    const [changeChat,triggerChangeChat] = useState(null)
    const { userData, selectedPrivateChat, setSelectedPrivateChat, privateContactList ,setPrivateContactList } = useContext(Rivi)
    useEffect(() => {
        setSelectedPrivateChat(null)
        setTimeout(()=>{
            let newSelectedPrivateChat = ContactDataExplorer(changeChat)
            setSelectedPrivateChat(newSelectedPrivateChat)
        },100)
    },changeChat)
    useEffect(() => {
        setPrivateContactList(ContactDataReciever())
        console.log(ContactDataReciever())
    },privateContactList)
    return (
        <React.Fragment>
            <span className={styles.title}>Private Messages</span>
            <div className={styles.searchBox}>
                 <Rivicon i='SearchbarIcon' s='22' mt={0} nav={false} selected={false} /> 
                 <input className={styles.contactSearchBox} type="text" name="Search Contacts" id="searchContacts" placeholder="Search..." />
            </div>
            <div className={styles.minitabsToggle}>
                <span onClick={()=>{toggleTab('allCon')}} className={tab==='allCon' ? styles.tabTitle_selected : styles.tabTitle}>All Conversations</span>
                <span onClick={()=>{toggleTab('onlineChat')}} className={tab==='onlineChat' ? styles.tabTitle_selected : styles.tabTitle}>Online Contacts</span>
            </div>
            {tab==='allCon'? 
            <PrivateContactList chatData={privateContactList} triggerChangeChat={triggerChangeChat} />
            :
            <PrivateContactListOnline chatData={privateContactList} triggerChangeChat={triggerChangeChat} />
        }
            <div className={styles.newChatButton}>
                <Rivicon i='NewChatStyleIcon' s='22' mt={0} nav={false} selected={false} /> 
            </div>
        </React.Fragment>
    )
}

export default PrivateSubWindow