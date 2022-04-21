import { createContext } from 'react'


const Rivi = createContext({
    state : 'PRIVATE',
    selectedPrivateChat : null,
    userData : {},
    privateContactList: [],
    setState: () => {},
    setSelectedPrivateChat: () => {}, 
    setUserData: ()=>{},
    setPrivateContactList: ()=> {}
})

export default Rivi
