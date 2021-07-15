import React from 'react'
import * as styles from '../Styles/MainWindow.module.css'

const MainWindow = ({children}) => {
    return (
        <div className={styles.mainWindow}>
            {children}
        </div>
    )
}

export default MainWindow
