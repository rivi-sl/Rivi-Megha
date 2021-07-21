import React, {useState} from 'react'
import * as styles from './SubWindowStyles/Private.module.css'
import Rivicon  from '../../Components/Icons/Rivicon'
import PrivateContactList from '../../Components/SubWindowComponents/Private/PrivateContactList'
import PrivateContactListOnline from '../../Components/SubWindowComponents/Private/PrivateContactListOnline'
import chatData from './dummyData'

const PrivateSubWindow = () => {
    const [tab,toggleTab] = useState('allCon')
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
            <PrivateContactList chatData={chatData} />
            :
            <PrivateContactListOnline chatData={chatData} />
        }
            <div className={styles.newChatButton}>
                <Rivicon i='NewChatIcon' s='22' mt={0} nav={false} selected={false} /> 
            </div>
        </React.Fragment>
    )
}

export default PrivateSubWindow