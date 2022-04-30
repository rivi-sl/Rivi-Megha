import * as styles from './scss/All.module.scss'
import Rivicon from '../../Icons/Rivicon';

const SignupForm = () => {
    return (
        <div className={styles.form}>
            <span className={styles.title}>Create New Account</span>
            <form>
                <input type="text" name="first_name" placeholder="First Name" className={styles.input_firstName}/>
                <input type="text" name="last_name" placeholder="Last Name" className={styles.input_lastName}/>
                <input type="email" name="email" placeholder="Email" className={styles.input_email}/>
            </form>
            
            <span className={styles.divider}>OR</span>
            <div className={styles.googleAuth}>
                <span>Fill with</span>
                <div className={styles.google_fill}>
                <Rivicon i='GoogleIcon' s='48' mt={5} selected={false} nav={false} /> 
                </div>
            </div>

            <form>
                <input type="password" name="password" placeholder="password" className={styles.input_password}/>
                <label className={styles.check}>
                    <input type="checkbox"/>
                    <span className={styles.checkmark}></span>
                    Accept our <span className={styles.important}>Terms and Conditions</span> 
                    
                </label>
                <input type="submit" value="Create" className={styles.createBtn} />
            </form>
        </div>
      );
}
 
export default SignupForm;