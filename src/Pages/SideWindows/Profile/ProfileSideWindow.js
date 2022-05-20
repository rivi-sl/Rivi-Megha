import * as styles from './scss/All.module.scss'
import {useContext, useEffect, useState ,Fragment} from 'react'
import Rivi from '../../../Rivi.Context'
import Rivicon from '../../../Components/Icons/Rivicon'


const ProfileSideWindow = () => {
    const {userData , setislogged} = useContext(Rivi)

    return (  
        <div className={styles.wrapper}>
            
            <div className={styles.profilePic}>
               <img src={userData.profilePic} alt="profilepic" className={styles.UserProfilePic} />
               <span className={styles.edit_pic_icon}>
                    <Rivicon i='EditIcon' s='26' p={0} mt={0} selected={false} nav={true}/> 
               </span>
            </div>
            <div className={styles.profileCard}>
            <span className={styles.title}>My Profile</span>
            </div>
           
           <div className={styles.userDataSection}>
                <div className={styles.userDataSet}>
                    <div className={styles.nameTitle}>Display Name</div>
                    <div className={styles.divider}>
                        <span>Edit</span>
                    </div>
                    <div className={styles.name}>{userData.name}</div>
                </div>
                <div className={styles.userDataSet}>
                    <div className={styles.bioTitle}>About</div>
                    <div className={styles.divider}>
                        <span>Edit</span>
                    </div>
                    <div className={styles.bio}>{userData.bio}</div>
                </div>
           </div>

            <div className={styles.logout}>
                <button className={styles.logoutBtn} onClick={()=>{setislogged(false)}}>Log out</button>
            </div>
        </div>   
        
    );
}
 
export default ProfileSideWindow;