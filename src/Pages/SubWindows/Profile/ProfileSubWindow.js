import * as styles from '../SubWindowStyles/Profile.module.css'
import {useContext, useEffect, useState ,Fragment} from 'react'
// import {riviUserData as UserData} from '../../../userData'



const ProfileSubWindow = () => {
    return (  
        <Fragment>
            <span className={styles.title}>Profile</span>
            {/* <span>{UserData.name}</span> */}
        </Fragment>   
        
    );
}
 
export default ProfileSubWindow;