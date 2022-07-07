import * as styles from "./scss/All.module.scss";
import { Theme } from "../../../utilities/Theme.Context";
import { useTranslation } from "react-i18next";
import { useRivi } from "../../../Rivi.Context";

const SettingsSideWindow = () => {
	const { Properties, theme, setTheme } = Theme();
    const {changeLang} = useRivi();
	const { t } = useTranslation();

	const toggleTheme = () => {
		if (theme === Properties.dark) {
			setTheme(Properties.light);
		} else {
			setTheme(Properties.dark);
		}
	};


	return (
		<>
			<span className={styles.title}>{t('Settings.Settings')}</span>
			<span>Theme</span>
			<div className={styles.theme}>				
				<button className={styles.themeBtn} onClick={toggleTheme}>
					change Theme
				</button>
				{/* <button className={styles.themeBtn} onClick={setTheme(themes.dark)}>Dark Theme</button> */}
			</div>

      <span>Language</span>
      	<div className={styles.theme}>
			<button className={styles.themeBtn} onClick={() => changeLang("en")}>English</button>				
			<button className={styles.themeBtn} onClick={() => changeLang("si")}>සිංහල</button>
			<button className={styles.themeBtn} onClick={() => changeLang("ta")}>தமிழ்</button>
		</div>
      
		</>
	);
};

export default SettingsSideWindow;
