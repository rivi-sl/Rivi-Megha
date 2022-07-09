import React from "react";
import * as styles from './scss/All.module.scss'

const MainWindowSkeleton = () => {
    return ( 
    <div className={styles.privateChatMain} id="privateChatMain">
        <div className={styles.chatWindowPanel} id="chatWindowPanel">

            <div className={styles.header} >
                <span className={styles.headerProfilePicture}/>
                <div className={styles.contactInfo}>
                    <span className={styles.name}></span>
                    <span className={styles.about}></span>
                    <span className={styles.state}></span>
                </div>
            </div>

            <div className={styles.chatWindow}>
                {[1,2,3].map((n)=>(
                    <div  key={n}>
                    <div className={styles.chatOutBox} >
                        <span className={styles.message} style={{"width":"300px","backgroundColor":"#fddebe"}}></span>
                        <span className={styles.message} style={{"width":"200px","backgroundColor":"#fddebe"}}></span>
                        <span className={styles.time} style={{"backgroundColor":"#fddebe"}}></span>
                    </div>
                    <div className={styles.chatInBox} >
                        <span className={styles.message} style={{"width":"350px","backgroundColor":"#e8e8e8"}}></span>
                        <span className={styles.message} style={{"width":"350px","backgroundColor":"#e8e8e8"}}></span>
                        <span className={styles.message} style={{"width":"200px","backgroundColor":"#e8e8e8"}}></span>
                        <span className={styles.time} style={{"backgroundColor":"#e8e8e8"}}></span>
                    </div>
                    </div>
                ))}
                
            </div>
            
            <div className={styles.sendArea}>
                <div className={styles.sendBox}>
                    <span className={styles.inputMessage}/>
                    <div className={styles.sendBtn}> </div>
                </div>
            </div>

        </div>
    </div>
     );
}
 
export default MainWindowSkeleton;