import React, { useEffect } from "react";
import * as styles from './scss/All.module.scss'
import Shimmer from "./Shimmer";

const SideWindowSkeleton = () => {
    useEffect(()=>{
        document.documentElement.style.pointerEvents = "none";
        const navbar = document.getElementById("navigation");
        navbar.style.backgroundColor = "#eb673f";
        const icons = navbar.children;
        for (let i = 0; i < icons.length; i++) {
           icons[i].style.display = "none";

        }
        
    },[])
    
    return ( 
        <>
            <span className={styles.title}></span>

            <div className={styles.searchBox}>
            </div>

            <div className={styles.minitabsToggle}>
                <span  className={styles.tabTitle_selected}> </span>
                <span  className={styles.tabTitle}></span>
                
            </div>

            <div className={styles.contactList}>
                {[1,2,3,4,5].map((n)=>(
                <div className={styles.contact} key={n}>
                    <div className={styles.contactShortInfo}>
                        <span className={styles.contactProfilePicture} />
                        
                        <div className={styles.contactNameandSMS}>
                            <span className={styles.contactName}></span>
                            <span className={styles.contactSMS}></span>
                            
                        </div>
                        <span className={styles.timeStamp}></span>
                        {/* <span className={styles.unreadNotifications}></span> */}
                        
                    </div>
                    
                </div>
                ))}
            </div>
           
            {/* <div className={styles.newChatButton}>
                <Rivicon i='NewChatStyleIcon' s='22' mt={0} nav={false} selected={false} /> 
            </div>  */}
        </>
     );
}
 
export default SideWindowSkeleton;