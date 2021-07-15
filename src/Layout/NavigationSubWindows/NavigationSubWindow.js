import React from 'react'
import * as styles from '../../Styles/Navigation.module.css'

const NavigationSubWindow = ({children}) => {
    return (
        <div className={styles.navigationSubWindow}>
            {children}
        </div>
    )
}

export default NavigationSubWindow
