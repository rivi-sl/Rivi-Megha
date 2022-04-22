import React from 'react'
import * as styles from './scss/All.module.scss'

const MainWindow = ({children}) => {
    return (
        <div className={styles.mainWindow}>
            {children}
        </div>
    )
}

export default MainWindow
