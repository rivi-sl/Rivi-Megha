import * as styles from "./scss/All.module.scss";
import { useNavigate } from "react-router-dom";
import SignInForm from "../../Components/Forms/SignIn/SignInForm";
import { useAuth } from "../../utilities/Auth.Context";

const SignIn = () => {
	const navigate = useNavigate();

	const {loading} = useAuth()

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
					<div className={`${styles.loadWrapper} ${loading ? null : styles.hide}`}>
						<div className={styles.loader}>
    						<span></span>
    						<span></span>
						</div>
					</div>
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
