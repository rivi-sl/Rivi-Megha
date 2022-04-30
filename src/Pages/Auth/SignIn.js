import * as styles from './scss/All.module.scss';
import { useNavigate } from 'react-router-dom'
import SigninForm from '../../Components/forms/signin/SigninForm';

const SignIn = () => {
    const navigate = useNavigate()

    return ( 
           <div className={styles.body}>
            <section className={styles.navigate_signup}>
                <div className={styles.navigate_signup_content}>
                    <span>New Here?</span>
                    <p>Sign Up and discover the community</p>
                    <div>
                        <button className={styles.navigate_signupBtn} onClick={()=>{navigate('/sign_up')}}>Sign Up</button>
                    </div>  
                </div>
            </section>

            <section className={styles.signin}>
                <SigninForm/>
            </section>
            </div>
        
     );
}
 
export default SignIn;