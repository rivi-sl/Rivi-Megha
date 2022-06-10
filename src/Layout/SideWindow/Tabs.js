import React from 'react'
import * as styles from './scss/All.module.scss'

export default ({children}) => {

    const toggleNav = () =>{
        const tabs = document.getElementById('tabs')
        const navigation = document.getElementById('navigation')
        if (tabs.style.opacity !== 1){
            navigation.style.left = '-50%'
            tabs.style.opacity = '1'
            const children = tabs.children
            for (let i = 0; i < children.length; i++) {
                children[i].style.pointerEvents = "auto"
            }
        }
    }

    return (
        <div className={styles.navigationSubWindow} id="tabs" onClick={()=>{toggleNav()}}>
            {children}
        </div>
    )
}
