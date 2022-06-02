import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () =>{
    return useContext(AuthContext)
} 

export const AuthProvider = ({children}) => {

    const [isLogged,setIsLogged] = useState(false)
    const [currentUser, setCurrentUser] = useState()
    const [loading,setLoading] = useState(true)

    function login(email,password) {
        setLoading(true)
        const reqObject = {
			email,
			password
		} 
		let axiosConfig = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		axios.post('https://rivi-k-backend.herokuapp.com/api/v1/user/signin', reqObject, axiosConfig)
			.then((res) => {
				if(res.data.success === true){
					setIsLogged(true)
                    setCurrentUser(res.data.userData)
                    console.log(res.data.userData)
				}else if(res.data.message === 'Invalid email'){
					//make the err message
					alert('Invalid email')		
				}	
				else if(res.data.message === 'Invalid password'){
					//make the err message
					alert('Invalid password')
				}
			})
			.catch((err) => {
				console.log("AXIOS ERROR: ", err);
			})
            setLoading(false)
    }

    const signup = (username,email,password,mobile) => {
        const reqObj = {
            username,
            email,
            password,
            mobile
        }

        let axiosConfig = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		axios.post('https://rivi-k-backend.herokuapp.com/api/v1/user/signup', reqObj, axiosConfig)
			.then((res) => {
				if(res.data.success === false){
                    alert(res.data.message)
                }else{
                    // alert(res.data.message)
                    setIsLogged(true)
                    setCurrentUser(res.data.user)
                }
			})
			.catch((err) => {
				console.log("AXIOS ERROR: ", err);
			})
    }

    const logout = () => {
        setCurrentUser(null)
    }

    useEffect(() => {
        // const unsubscribe = auth.onAuthStateChanged(async (user)=>{
        //     if(user){
        //         const docRef = doc(db, "users", user.uid);
        //         const docSnap = await getDoc(docRef);
        //             if (docSnap.exists()) {
        //             //   console.log("Document data:", docSnap.data());
        //             setCurrentUser({
        //                 ...user,
        //                 ...docSnap.data()
        //                 })
        //             }
        //         }
        //     setLoading(false)
        // });
        // return unsubscribe
        if(!isLogged){
            setCurrentUser(null)
        }
    }, [isLogged]);

    const value = {
        loading,
        currentUser,
        setLoading,
        login,
        signup,
        logout
    } 

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )


}