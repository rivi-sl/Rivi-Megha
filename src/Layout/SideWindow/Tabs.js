import React from 'react'
import * as styles from './scss/All.module.scss'

const Tabs = ({children}) => {
    return (
        <div className={styles.navigationSubWindow}>
            {children}
        </div>
    )
}

export default Tabs
