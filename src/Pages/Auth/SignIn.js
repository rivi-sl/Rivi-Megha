import * as styles from "./scss/All.module.scss";
import { useNavigate } from "react-router-dom";
import SignInForm from "../../Components/forms/signin/SignInForm";

const SignIn = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.authBody}>
			<div className={styles.authContent}>
				<section className={styles.authSideBar}>
					<div className={styles.logo}></div>
					<div className={styles.text}>
						<span>New Here?</span>
						<p>Sign Up and discover the community</p>
						<div>
							<button
								className={styles.button}
								onClick={() => {
									navigate("/sign_up");
								}}
							>
								Sign Up
							</button>
						</div>
					</div>
				</section>

				<section className={styles.signIn}>
					<SignInForm />
				</section>

				<section className={styles.mobileLinks}>
					<span>New Here?</span>
					<button
						className={styles.button}
						onClick={() => {
							navigate("/sign_up");
						}}
					>
						Sign Up
					</button>
				</section>
			</div>
		</div>
	);
};

export default SignIn;
