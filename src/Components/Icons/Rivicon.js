import React from 'react'
import Profile from './Profile.svg'
import Private from './Private.svg'
import Group from './Group.svg'
import Global from './Global.svg'
import Settings from './Settings.svg'
import Searchbar from './Searchbar.svg'
import * as styles from './Icons.module.css'

const Rivicon = (props) => {

    const {i,s,mt,selected, nav} = props

    const IconLibrary = {
        ProfileIcon: <img src={Profile} width={s} alt='Rivicon-Profile' />,
        PrivateIcon: <img src={Private} width={s} alt='Rivicon-Private' />,
        GroupIcon: <img src={Group} width={s} alt='Rivicon-Group' />,
        GlobalIcon: <img src={Global} width={s} alt='Rivicon-Global' />,
        SettingsIcon: <img src={Settings} width={s} alt='Rivicon-Settings' />,
        SearchbarIcon : <img src={Searchbar} width={s} alt='Rivicon-Searchbar' />,
    }

    return (
        <i className={nav ? selected ? styles.icon_selected :styles.icon : null} style={{marginTop: mt, height: s}}>
            {IconLibrary[i]}
        </i>
    )
}

export default Rivicon
