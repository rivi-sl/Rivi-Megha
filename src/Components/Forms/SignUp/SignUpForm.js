import * as styles from "./scss/All.module.scss";
import Rivicon from "../../Icons/Rivicon";

const SignupForm = () => {
	return (
		<div className={styles.form}>
			<span className={styles.title}>Create New Account</span>
			<form>
                <div className={styles.formLeft}>
                    <input type="text" name="username" placeholder="User Name" className={styles.inputUserName} />
                    <input type="email" name="email" placeholder="Email" className={styles.inputEmail} />
                    <input type="password" name="password" placeholder="Password" className={styles.inputPassword} />
                </div>
				<div className={styles.formRight}>
                    <div className={styles.imageArea}>
                        Drag or click to upload user image.
                    </div>
                    {/* <input type="button" name="userimage" value="User Image" className={styles.inputUserImage} /> */}
                </div>                
				<div className={styles.formBottom}>
                    <label className={styles.conditions}>
                        <input type="checkbox" className={styles.inputCheck} />
                        <span className={styles.checkBg}></span>
                        Accept our <span className={styles.important}>Terms and Conditions</span>
                    </label>
                    <input type="submit" value="Create" className={styles.createBtn} />
                </div>
			</form>

			{/* <span className={styles.divider}>OR</span> */}
			<div className={styles.googleAuth}>
				<span>Fill with</span>
				<div className={styles.googleFill}>
					<Rivicon i="GoogleIcon" s="48" mt={5} selected={false} nav={false} />
				</div>
			</div>
		</div>
	);
};

export default SignupForm;
