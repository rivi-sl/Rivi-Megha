import React from 'react'
import * as styles from './scss/All.module.scss'

export default ({children}) => {
    return (
        <div className={styles.navigationSubWindow}>
            {children}
        </div>
    )
}
