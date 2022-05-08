import * as styles from "./scss/All.module.scss";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../../Components/Forms/SignUp/SignUpForm";

const SignUp = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.authBody}>
			<div className={styles.authContent}>
				<section className={styles.authSideBar}>
					<div className={styles.logo}></div>
					<div className={styles.text}>
						<span>Already have an account?</span>
						<div>
							<button
								className={styles.button}
								onClick={() => {
									navigate("/sign_in");
								}}
							>
								Login
							</button>
						</div>
					</div>
				</section>

				<section className={styles.signUp}>
					<SignUpForm />
				</section>

				<section className={styles.mobileLinks}>
					<span>Already have an account?</span>
					<button
						className={styles.button}
						onClick={() => {
							navigate("/sign_in");
						}}
					>
						Sign Up
					</button>
				</section>
			</div>
		</div>
	);
};

export default SignUp;
