import { useContext } from "react";
import * as styles from "./scss/All.module.scss";
import Rivi from "../../Rivi.Context";

const Auth = ({ children }) => {

	return (
		<div className={styles.authWindow}>
			{children}
		</div>
	);
};

export default Auth;
