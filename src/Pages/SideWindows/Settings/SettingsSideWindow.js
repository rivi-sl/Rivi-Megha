import * as styles from './scss/All.module.scss'
import { Theme } from '../../../utilities/Theme.Context'
import { useEffect } from 'react';


const SettingsSideWindow = () => {
    const { Properties,theme,setTheme } = Theme()

    const toggleTheme = () => {
        if (theme === Properties.dark) {
          setTheme(Properties.light);
        } else {
          setTheme(Properties.dark);
        }
      };


    return ( 
        <>
            <span className={styles.title}>Settings</span>
            <span>Theme</span>
            <div className={styles.theme}>
                <button className={styles.themeBtn} onClick={toggleTheme}>change Theme</button>
                {/* <button className={styles.themeBtn} onClick={setTheme(themes.dark)}>Dark Theme</button> */}
            </div>
        </>
     );
}
 
export default SettingsSideWindow ;