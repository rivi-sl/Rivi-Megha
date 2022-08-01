import { useContext, useState ,createContext ,useEffect} from 'react'
import Fonts from "./utilities/Translations/Fonts";
import riviUserData from  './userData'
import { useTranslation } from "react-i18next";
import "./utilities/utilityStyles/Toast.scss"

const RiviContext = createContext()
 

export const useRivi = () => {
    return useContext(RiviContext)
}

export const RiviProvider = ({children}) => {
    const { i18n } = useTranslation();

    const [state,setState] = useState('PRIVATE')
    const [selectedPrivateChat,setSelectedPrivateChat] = useState(null)
    const [userData,setUserData] = useState(riviUserData)
    const [privateContactList,setPrivateContactList] = useState([])
    const [islogged,setislogged] = useState(false)
    const [Lang,changeLang] = useState("en")

    useEffect(() => {
        i18n.changeLanguage(Lang);
		document.documentElement.style.setProperty('--font', Fonts[Lang]);
    },[Lang]);

    const getToastType = (type) => {
        switch (type) {
            case "success":
                return "198754"
            case "danger":
                return "d21f3c"
            case "warning":
                return "ffbf00"
            default:
                return "eb683f"
        }
    }

    const RiviToast = () =>{
        return(
           <div className="toast" id="toast">
            </div>
        )
    }

    const riviToasteer = (options) => {
        const toast =  document.getElementById("toast")
        toast.innerText = options.message
        toast.style.borderLeft = `5px solid #${getToastType(options.type)}`
        toast.classList.add("showToast")
        setTimeout(() => {
            toast.classList.remove("showToast")
        },options.age||2000)
    }

    const value = {
        state,
        selectedPrivateChat,
        userData,
        privateContactList,
        islogged,
        Lang,
        setState,
        setSelectedPrivateChat,
        setUserData,
        setPrivateContactList,
        setislogged,
        changeLang,
        RiviToast,
        riviToasteer
    }

    return(
        <RiviContext.Provider value={value}>
            {children}
        </RiviContext.Provider>
    )
}

