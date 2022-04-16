import React from 'react'
import *  as styles from '../Styles/Navigation.module.css'
import '../Components/Icons/Icons.module.css'
import Rivicon from '../Components/Icons/Rivicon'

const Navigation = () => {
    return (
        <div className={styles.navigationBar}>
            <section className={styles.profile}>
                <Rivicon i='ProfileStyleIcon' s='32' mt={0} selected={false} nav={true}/> 
            </section>
            <section className={styles.pages}>
                <Rivicon i='GlobalStyleIcon' s='32' mt={30} selected={false} nav={true}/>
                <Rivicon i='PrivateStyleIcon' s='32' mt={30} selected={true} nav={true}/> 
                <Rivicon i='GroupStyleIcon' s='32' mt={30} selected={false} nav={true}/>  
            </section>
            <section className={styles.settings}>
                <Rivicon i='SettingsStyleIcon' s='32' mt={0} selected={false} nav={true}/>
            </section>

        </div>
    )
}

export default Navigation
