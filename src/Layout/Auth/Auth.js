import { useContext } from "react";
import * as styles from "./scss/All.module.scss";
import { useRivi } from "../../Rivi.Context";

const Auth = ({ children }) => {

	const {RiviToast} = useRivi()

	return (
		<div className={styles.authWindow}>
			{children}
		</div>
	);
};

export default Auth;
