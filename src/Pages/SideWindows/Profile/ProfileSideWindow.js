import * as styles from './scss/All.module.scss'
import {useContext, useEffect, useState ,Fragment} from 'react'
import Rivi from '../../../Rivi.Context'
import Rivicon from '../../../Components/Icons/Rivicon'


const ProfileSideWindow = () => {
    const {userData , setislogged} = useContext(Rivi)

    return (  
        <Fragment>
            <span className={styles.title}>Profile</span>

            <div className={styles.profilePic}>
               <img src={userData.profilePic} alt="profilepic" className={styles.UserProfilePic} />
               <span className={styles.edit_pic_icon}>
                    <Rivicon i='EditIcon' s='32' mt={0} selected={false} nav={true}/> 
               </span>
            </div>

            <div className={styles.profileName}>

                <div className={styles.editName}>
                  <span>Edit Name</span>
                </div>
                <div className={styles.name}>
                    <span>{userData.name}</span> 
                </div>
                <span className={styles.edit_name_icon}>
                        <Rivicon i='EditIcon' s='32' mt={0} selected={false} nav={true}/> 
                </span>
                
            </div>

            <div className={styles.profileBio}>

                <div className={styles.editBio}>
                <span>Edit Bio</span>
                </div>
                <div className={styles.bio}>
                    <span>{userData.bio}</span> 
                </div>
                <span className={styles.edit_bio_icon}>
                        <Rivicon i='EditIcon' s='32' mt={0} selected={false} nav={true}/> 
                </span>

            </div>

            <div className={styles.logout}>
                <button className={styles.logoutBtn} onClick={()=>{setislogged(false)}}>Logout</button>
            </div>
        </Fragment>   
        
    );
}
 
export default ProfileSideWindow;