import * as styles from "./scss/All.module.scss";
import { Theme } from "../../../utilities/Theme.Context";
import { Language } from "../../../utilities/Translate.Context";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SettingsSideWindow = () => {
	const { Properties, theme, setTheme } = Theme();
  // const { LangProperties, language, setLang } = Theme();
	const { t, i18n } = useTranslation();

	const toggleTheme = () => {
		if (theme === Properties.dark) {
			setTheme(Properties.light);
		} else {
			setTheme(Properties.dark);
		}
	};

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  }

	return (
		<>
			<span className={styles.title}>{t('Settings.Settings')}</span>
			<span>{t('Settings.Theme')}</span>
			<div className={styles.theme}>				
				<button className={styles.themeBtn} onClick={toggleTheme}>
					change Theme
				</button>
				{/* <button className={styles.themeBtn} onClick={setTheme(themes.dark)}>Dark Theme</button> */}
			</div>

      <span>Language</span>
      <div className={styles.theme}>				
        <button className={styles.themeBtn} onClick={() => changeLang("si")}>සිංහල</button>
        <button className={styles.themeBtn} onClick={() => changeLang("ta")}>தமிழ்</button>
        <button className={styles.themeBtn} onClick={() => changeLang("en")}>English</button>
			</div>
      
		</>
	);
};

export default SettingsSideWindow;
