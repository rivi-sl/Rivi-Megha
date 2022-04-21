import React, { useContext , useState , useEffect} from 'react'
import *  as styles from '../Styles/Navigation.module.css'
import '../Components/Icons/Icons.module.css'
import Rivicon from '../Components/Icons/Rivicon'
import {Link} from 'react-router-dom'
import Rivi from './../Rivi.Context'


const Navigation = () => {
    const [window , triggerWindow] = useState('profile')
    const { state, setState} = useContext(Rivi)

    // useEffect(()=>{
    //     setSelectedPrivateChat(null)
    // })

    return (
        <div className={styles.navigationBar}>
            <section className={styles.profile}>
                <span onClick={()=>{triggerWindow('profile')}}>
                    <Link to="/profile">
                    <Rivicon i='ProfileStyleIcon' s='32' mt={0} selected={window==='profile' ? true : false} nav={true} /> 
                    </Link>
                </span>
            </section>
            <section className={styles.pages}>
                <span onClick={()=>{triggerWindow('global')}}>
                    <Rivicon i='GlobalStyleIcon' s='32' mt={30} selected={window==='global' ? true : false} nav={true} />
                </span>

                <span onClick={()=>{triggerWindow('private')}}>
                    <Link to="/private">
                    <Rivicon i='PrivateStyleIcon' s='32' mt={30} selected={window==='private' ? true : false} nav={true} /> 
                    </Link>
                </span>

                <span onClick={()=>{triggerWindow('group')}}>
                <Rivicon i='GroupStyleIcon' s='32' mt={30} selected={window==='group' ? true : false} nav={true} /> 
                </span> 

            </section>
            <section className={styles.settings}>
                <span onClick={()=>{triggerWindow('setting')}}>
                <Rivicon i='SettingsStyleIcon' s='32' mt={0} selected={window==='setting' ? true : false} nav={true} />
                </span>
            </section>

        </div>
    )
}

export default Navigation
