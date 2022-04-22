import React, { useContext } from 'react'
import * as styles from './scss/All.module.scss'
import Rivicon from '../../Icons/Rivicon'
import PrivateImageViewer from '../../../Pages/MainWindows/Private/PrivateChatImageViewer.Context'

export const ProfileInfo = (props) => {
    const {profileInfo} = props
    const {active, setActive, imageUrl, setImageUrl} = useContext(PrivateImageViewer)
    const handleToggleProfile = () => {
        const profileInfoSection = document.getElementById("profileInfoSection")
        profileInfoSection.style.display = "none"
    }
    return (
        <div className={styles.profileInfo} id="profileInfoSection">
            <img className={styles.profileInfoPhoto} src={profileInfo.profilePic} alt={`Profile Picture - ${profileInfo.name}`} />
            <div className={styles.profileInfoCard}>
            <span className={styles.name}>{profileInfo.name}</span>
            <span className={styles.about}>{profileInfo.about}</span>
            </div>
            <div className={styles.profileInfoMedia}>
                <span className={styles.profileInfoMediaTitle}>Media</span>
                <div className={styles.profileInfoPhotos}>
                    {profileInfo.photos && profileInfo.photos.map(photo=>{
                        return(
                        <div className={styles.profileInfoPhotoBox}
                            onClick={() => {
                                setActive(true)
                                setImageUrl(photo.imageId)
                            }}
                            style={{backgroundImage:`url('${photo.photoLink}')`}}
                            data-id={photo.imageId}
                        >
                            <div className={styles.openPhotoIcon}>
                            <Rivicon i='CameraIcon' s='22' mt={0} nav={false} pl={10} pr={10} selected={false} style={{opacity:0.5,filter:'blur(0.5px)'}} />
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.toggleProfileButton} onClick={()=>{handleToggleProfile()}} >
                <Rivicon i='ChevronRightIcon' s='10' mt={0} nav={false} pl={10} pr={10} selected={false} />
            </div>
        </div>
    )
}

export default ProfileInfo