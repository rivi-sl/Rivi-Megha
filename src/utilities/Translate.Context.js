import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const Language = () => {
	return useContext(LanguageContext);
};

export const LangProperties = {	
	en: {
		font1: "'Poppins', sans-serif",
	},
  si: {
		font1: "'Yaldevi', sans-serif",
	}
};

export const LanguageProvider = ({ children }) => {
	const [language, setLang] = useState(LangProperties.si);

	const setVariables = (language) => {
		for (const lang in language) {
			document.documentElement.style.setProperty(`--${lang}`, language[lang]);
		}
	};

	useEffect(() => {
		setVariables(language);
	}, [language]);

	const value = {
		language,
		LangProperties,
		setLang,
	};

	return(
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
};
