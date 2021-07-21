import React from 'react'
import Profile from './Icons/Profile.svg'
import Private from './Icons/Private.svg'
import Group from './Icons/Group.svg'
import Global from './Icons/Global.svg'
import Settings from './Icons/Settings.svg'
import Searchbar from './Icons/Searchbar.svg'
import NewChat from './Icons/NewChatIcon.svg'
import Send from './Icons/Send.svg'
import Mic from './Icons/Mic.svg'
import Emoticon from './Icons/Emoticon.svg'
import Attach from './Icons/Attach.svg'
import ChevronDown from './Icons/ChevronDown.svg'
import ChevronTop from './Icons/ChevronTop.svg'
import ChevronRight from './Icons/ChevronRight.svg'
import ChevronLeft from './Icons/ChevronLeft.svg'
import Camera from './Icons/Camera.svg'
import Close from './Icons/Close.svg'

const IconExplorer = (s,i,style) =>{
    const IconLibrary = {
        ProfileIcon: <img src={Profile} style={style?style:null} width={s} alt='Rivicon-Profile' />,
        PrivateIcon: <img src={Private} style={style?style:null} width={s} alt='Rivicon-Private' />,
        GroupIcon: <img src={Group} style={style?style:null} width={s} alt='Rivicon-Group' />,
        GlobalIcon: <img src={Global} style={style?style:null} width={s} alt='Rivicon-Global' />,
        SettingsIcon: <img src={Settings} style={style?style:null} width={s} alt='Rivicon-Settings' />,
        SearchbarIcon : <img src={Searchbar} style={style?style:null} width={s} alt='Rivicon-Searchbar' />,
        NewChatIcon : <img src={NewChat} style={style?style:null} width={s} alt='Rivicon-NewChat' />,
        MicIcon : <img src={Mic} width={s} style={style?style:null} alt='Rivicon-Mic' />,
        SendIcon : <img src={Send} style={style?style:null} width={s} alt='Rivicon-Send' />,
        EmoticonIcon : <img src={Emoticon} style={style?style:null} width={s} alt='Rivicon-Emoticon' />,
        AttachIcon : <img src={Attach} style={style?style:null} width={s} alt='Rivicon-Attach' />,
        ChevronDownIcon : <img src={ChevronDown} style={style?style:null} width={s} alt='Rivicon-ChevronDown' />,
        ChevronTopIcon : <img src={ChevronTop} style={style?style:null} width={s} alt='Rivicon-ChevronTop' />,
        ChevronRightIcon : <img src={ChevronRight} style={style?style:null} width={s} alt='Rivicon-ChevronRight' />,
        ChevronLeftIcon : <img src={ChevronLeft} style={style?style:null} width={s} alt='Rivicon-ChevronLeft' />,
        CameraIcon : <img src={Camera} style={style?style:null} width={s} alt='Rivicon-Camera' />,
        CloseIcon : <img src={Close} style={style?style:null} width={s} alt='Rivicon-Close' />,
    }
    return IconLibrary[i]
}

export default IconExplorer