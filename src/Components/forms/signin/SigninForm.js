import * as styles from "./scss/All.module.scss";
import { useContext } from "react";
import Rivi from "../../../Rivi.Context";
import Rivicon from "../../Icons/Rivicon";

const SigninForm = () => {
	const { setislogged } = useContext(Rivi);

	return (
		<div className={styles.form}>
			<span className={styles.title}>Login to your Account</span>
			<form>
				<input type="email" name="email" placeholder="Email" className={styles.inputEmail} />
				<input type="password" name="password" placeholder="Password" className={styles.inputPassword} />
				<input
					type="submit"
					value="Login"
					className={styles.loginBtn}
					onClick={() => {
						setislogged(true);
					}}
				/>
			</form>

			<span className={styles.divider}>OR</span>
			<div className={styles.googleAuth}>
				<span>Login with</span>
				<div className={styles.googleLogin}>
					<Rivicon i="GoogleIcon" s="45" mt={20} selected={false} nav={false} />
				</div>
			</div>
		</div>
	);
};

export default SigninForm;
