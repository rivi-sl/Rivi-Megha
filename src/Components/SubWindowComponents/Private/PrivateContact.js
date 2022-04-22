import React from 'react'
import * as styles from './scss/All.module.scss'

const PrivateContact = (props) => {
    const {selected,name,profile,timeStamp,lastSMS,online,unread} = props
    return (
        <div className={styles.contactShortInfo}>
            <img src={profile} alt="profilepic" className={online ? styles.contactProfilePicture_online : styles.contactProfilePicture} />
            <div className={styles.contactNameandSMS}>
                <span className={styles.contactName}>{name}</span>
                <span className={styles.contactSMS}>{lastSMS}</span>
            </div>
            <span className={styles.timeStamp}>{timeStamp}</span>
            {unread>0
            ?
            <span className={styles.unreadNotifications}>{unread}</span>
            :
            null
            }
            {/* <span className={selected ? styles.unreadNotifications_selected : styles.unreadNotifications}>{unread}</span> */}
        </div>
    )
}

export default PrivateContact
