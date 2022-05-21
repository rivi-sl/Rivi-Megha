import { useContext, useState ,createContext } from 'react'
import riviUserData from  './userData'

const RiviContext = createContext()
 

export const useRivi = () => {
    return useContext(RiviContext)
}

export const RiviProvider = ({children}) => {
    const [state,setState] = useState('PRIVATE')
    const [selectedPrivateChat,setSelectedPrivateChat] = useState(null)
    const [userData,setUserData] = useState(riviUserData)
    const [privateContactList,setPrivateContactList] = useState([])
    const [islogged,setislogged] = useState(false)

    const value = {
        state,
        selectedPrivateChat,
        userData,
        privateContactList,
        islogged,
        setState,
        setSelectedPrivateChat,
        setUserData,
        setPrivateContactList,
        setislogged
    }

    return(
        <RiviContext.Provider value={value}>
            {children}
        </RiviContext.Provider>
    )
}

