import {useContext, useEffect, useState ,Fragment} from 'react'
import * as styles from './scss/All.module.scss'
import Rivicon  from '../../../Components/Icons/Rivicon'
import PrivateContactList from '../../../Components/SubWindowComponents/Private/PrivateContactList'
import PrivateContactListOnline from '../../../Components/SubWindowComponents/Private/PrivateContactListOnline'
import { useRivi } from '../../../Rivi.Context'
import {ContactDataExplorer,ContactDataReciever} from './Functions/ContactData.Explorer'

const PrivateSideWindow = () => {
    const [tab,toggleTab] = useState('allCon')
    const [changeChat,triggerChangeChat] = useState(null)
    const { setSelectedPrivateChat, privateContactList ,setPrivateContactList } = useRivi()
    
    const ToggleWindow = () => {
        const Appbar = document.getElementById("Appbar")
        const Appbody = document.getElementById("Appbody")
        Appbody.style.transition = "0.3s"
        setTimeout(function(){
            Appbar.classList.add("collapse")
            Appbody.style.opacity = "1"
            Appbody.style.pointerEvents = "auto"
            
        },200)
    }


    useEffect(() => {
        setSelectedPrivateChat(null)
        setTimeout(()=>{
            let newSelectedPrivateChat = ContactDataExplorer(changeChat)
            setSelectedPrivateChat(newSelectedPrivateChat)
        },100)
    },[changeChat,setSelectedPrivateChat])
    useEffect(() => {
        setPrivateContactList(ContactDataReciever())
        // console.log(ContactDataReciever())
    },[setPrivateContactList])
    return (
        <>
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
            <PrivateContactList chatData={privateContactList} triggerChangeChat={triggerChangeChat} toggleWindow={ToggleWindow}/>
            :
            <PrivateContactListOnline chatData={privateContactList} triggerChangeChat={triggerChangeChat} toggleWindow={ToggleWindow}/>
        }
            <div className={styles.newChatButton}>
                <Rivicon i='NewChatStyleIcon' s='22' mt={0} nav={false} selected={false} /> 
            </div>
        </>
    )
}

export default PrivateSideWindow