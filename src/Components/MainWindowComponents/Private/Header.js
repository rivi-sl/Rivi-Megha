import React from 'react'
import * as styles from './scss/All.module.scss'

const Header = (props) => {
    const {profilePic,name,about,online} = props

    const handleToggleProfile = () => {
        const profileInfoSection = document.getElementById("profileInfoSection")
        profileInfoSection.style.display = "flex"
    }

    return (
        <React.Fragment>
            <img src={profilePic} alt="profilepic" className={online ? styles.contactProfilePicture_online : styles.contactProfilePicture} onClick={()=>{handleToggleProfile()}}/>
                <div className={styles.contactInfo} onClick={()=>{handleToggleProfile()}}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.about}>{about}</span>
                    <span className={styles.state}>{online ? 'Online' : 'Offline'}</span>
                </div>
        </React.Fragment>
    )
}

export default Header
