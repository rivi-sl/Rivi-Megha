import React, { createContext,useContext,useState,useEffect} from 'react'
import bgOverlay from "../Images/BackDrawingOriginal-withbg.png"

const ThemeContext = createContext()

export const Theme = () => {
    return useContext(ThemeContext)
}

export const Properties = {
    // dark: {
    //     Appbar: "#2B2B2B",
    //     Appbody: "#474747",
    //     primaryText: "#FFFFFF",
    //     secondaryText: "#B2B2B2",
    //     borders:"rgba(211, 211, 211, 0.3)",
    //     chatList:"#E2E2E2",
    //     contactSelected:"#434343",
    //     header:"#383838",
    //     chatOut: "#EB683F",
    //     chatIn: "#676767",
    //     sendArea:"rgba(211, 211, 211, 0.58)",
        
    // },
    dark: {
        Appbar: "#0b0e12",
        Appbody: "#474747",
        primaryText: "#FFFFFF",
        secondaryText: "#B2B2B2",
        borders:"#d5dada1c",
        chatList:"#E2E2E2",
        contactSelected:"#181e23",
        header:"#181e23",
        chatOut: "#FD774D",
        chatIn: "#181e23",
        sendArea:"#d5dada8c",
        opacityForBg: "1",
        backgroundOverlay: "url('/BackDrawingOriginal-withbg-dark.png')"
        
    },
    light: {
        Appbar: "#F8F8F8",
        Appbody: "#FFFFFF",
        primaryText: "#222222",
        secondaryText:"#3E4445",
        borders:"rgba(62, 68, 69, 0.1)",
        chatList:"#3E4445",
        contactSelected:"#e8e8e8",
        header:"#fbfbfb",
        chatOut: "#ffbe7b",
        chatIn: "#fff",
        sendArea:"rgba(62, 68, 69, 0.25)",
        opacityForBg: "0.1",
        backgroundOverlay: "url('/BackDrawingOriginal-withbg.png')"
    }
  };

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState(Properties.light)

    const setVariables = theme => {
        for (const value in theme) {
          document.documentElement.style.setProperty(`--${value}`, theme[value]);
        }
      };
    
      useEffect(() => {
        setVariables(theme);
      },[theme]);

    const value = {
        theme,
        Properties,
        setTheme
    } 

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )


}
