import { useContext } from 'react';
import * as styles from './scss/All.module.scss'
import Rivi from '../../Rivi.Context';



const Auth = ({children}) => {
    const{islogged,setislogged} = useContext(Rivi)

    return ( 
        <div className={styles.body}>
            <div className={styles.AuthSection}>
               {children}
            </div>
        </div>
     );
}
 
export default Auth;
