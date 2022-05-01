import * as styles from './scss/All.module.scss';
import { useNavigate } from 'react-router-dom'
import SignupForm from '../../Components/forms/signup/SignupForm';

const SignUp = () => {
    const navigate = useNavigate()

    return ( 
        <div className={styles.body}>
            <section className={styles.navigate_signin}>
                <div className={styles.navigate_signin_content}>
                    <span>Already have an account?</span>
                    <div>
                        <button className={styles.navigate_signinBtn} onClick={()=>{navigate('/sign_in')}}>Login</button>
                    </div>  
                </div>
            </section>

            <section className={styles.signup}>
               <SignupForm/>
            </section>
        </div>
     );
}
 
export default SignUp;