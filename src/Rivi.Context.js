import { createContext } from 'react'


const Rivi = createContext({
    state : 'PRIVATE',
    selectedPrivateChat : null,
    userData : {},
    privateContactList: [],
    islogged: false,
    setState: () => {},
    setSelectedPrivateChat: () => {}, 
    setUserData: ()=>{},
    setPrivateContactList: ()=> {},
    setislogged:()=> {}
})

export default Rivi
