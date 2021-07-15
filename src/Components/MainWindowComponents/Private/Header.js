import React from 'react'
import * as styles from '../../../Pages/MainWindows/MainWindowStyles/PrivateChat.module.css'

const Header = (props) => {
    const {profilePic,name,about,online} = props
    return (
        <React.Fragment>
            <img src={profilePic} alt="profilepic" className={online ? styles.contactProfilePicture_online : styles.contactProfilePicture} />
                <div className={styles.contactInfo}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.about}>{about}</span>
                    <span className={styles.state}>{online ? 'Online' : 'Offline'}</span>
                </div>
                <div className={styles.contactActions}></div>
        </React.Fragment>
    )
}

export default Header
