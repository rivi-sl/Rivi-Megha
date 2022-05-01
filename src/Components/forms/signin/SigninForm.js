import * as styles from './scss/All.module.scss'
import { useContext } from 'react';
import Rivi from '../../../Rivi.Context'
import Rivicon from '../../Icons/Rivicon';

const SigninForm = () => {
    const {setislogged} = useContext(Rivi)

    return (
        <div className={styles.form}>
            <span className={styles.title}>Login to your Account</span>
            <form>
                <input type="email" name="email" placeholder="Email" className={styles.input_email}/>
                <input type="password" name="password" placeholder="password" className={styles.input_password}/>
                <input type="submit" value="Login" className={styles.loginBtn} onClick={()=>{setislogged(true)}}/>
            </form>
            
            <span className={styles.divider}>OR</span>
            <div className={styles.googleAuth}>
                <span>login with</span>
                <div className={styles.google_login}>
                <Rivicon i='GoogleIcon' s='54' mt={20} selected={false} nav={false} /> 
                </div>
            </div>
        </div>
      );
}
 
export default SigninForm;