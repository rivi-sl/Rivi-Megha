import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRivi } from '../Rivi.Context'

const axiosConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
};

let loginTimeout;

const AuthContext = createContext()

export const useAuth = () =>{
    return useContext(AuthContext)
} 

export const AuthProvider = ({children}) => {

    const [isLogged,setIsLogged] = useState(false)
    const [currentUser, setCurrentUser] = useState()
    const [loading,setLoading] = useState(false)
    const [token,setToken] = useState('')

    const {riviToasteer} = useRivi()


    function login(email,password) {
        setLoading(true)
        const reqObject = {
			email,
			password
		} 

		axios.post('https://rivi-test-backend.herokuapp.com/api/v1/user/signin', reqObject, axiosConfig)
			.then((res) => {
				if(res.data.success === true){
                    setToken(res.data.token)
                    let loginToken = res.data.token
                    console.log(res.data)
                    localStorage.setItem('user',JSON.stringify(res.data))
					// setIsLogged(true)
                    // setCurrentUser(res.data)
                    axios.get(`https://rivi-test-backend.herokuapp.com/api/v1/user/getUser?token=${loginToken}`, axiosConfig)
                        .then((res) => {
                            if(res.data.success === false){
                                alert(res.data.message)
                            }else{
                                riviToasteer({
                                    type:"success",
                                    message:"Login Successful",
                                })
                                setCurrentUser(res.data.user)
                                setIsLogged(true)
                                setLoading(false)
                            }
                        })
                        .catch((err) => {
                            console.log("AXIOS ERROR: ", err);
                        }) 
				}else if(res.data.message === 'Invalid email'){
					//make the err message
					// alert('Invalid email')		
                    riviToasteer({
                        type:"danger",
                        message:"User not found! Sign up if you don't gave an account.",
                    })
                    setLoading(false)
				}	
				else if(res.data.message === 'Invalid password'){
					//make the err message
					// alert('Invalid password')
                    riviToasteer({
                        type:"danger",
                        message:"Wrong Password! Please try again.",
                    })
                    setLoading(false)
				}
			})
			.catch((err) => {
				console.log("AXIOS ERROR: ", err);
                setLoading(false)
			})
    }

    const signup = (username,email,password,mobile,image) => {
        var reqObj = new FormData()
        reqObj.append('username',username)
        reqObj.append('email',email)
        reqObj.append('password',password)
        reqObj.append('mobile',mobile)
        reqObj.append('profilePic',image)

        let axiosConfig = {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		};

        //https://rivi-test-backend.herokuapp.com/api/v1/user/signup
		axios.post('https://rivi-test-backend.herokuapp.com/api/v1/user/signup', reqObj, axiosConfig)
			.then((res) => {
				if(res.data.success === false){
                    riviToasteer({
                        type:"danger",
                        message:res.data.message,
                    })
                }else{
                    riviToasteer({
                        type:"success",
                        message:res.data.message,
                    })
                }
			})
			.catch((err) => {
				console.log("AXIOS ERROR: ", err);
			})
        
        
    }

    const verifyEmail = (email)=>{
        const reqObj = {
            email
        }
        axios.post('https://rivi-test-backend.herokuapp.com/api/v1/user/verify/email', reqObj, axiosConfig)
			.then((res) => {
				if(res.data.success === false){
                    riviToasteer({
                        type:"danger",
                        message:res.data.message,
                    })
                }else{
                    riviToasteer({
                        type:"success",
                        message:res.data.message,
                    })
                }
			})
			.catch((err) => {
				console.log("AXIOS ERROR: ", err);
			})
    }

    const verify = (token)=>{
        axios.post(`https://rivi-test-backend.herokuapp.com/api/v1/user/verify/${token}`, reqObj, axiosConfig)
			.then((res) => {
				if(res.data.success === false){
                    riviToasteer({
                        type:"danger",
                        message:res.data.message,
                    })
                }else{
                    riviToasteer({
                        type:"success",
                        message:res.data.message,
                    })
                }
			})
			.catch((err) => {
				console.log("AXIOS ERROR: ", err);
			})
    }

    const resetEmail = (email, host)=>{
        const reqObj = {
            email,
            host
        }
        axios.post(`https://rivi-test-backend.herokuapp.com/api/v1/user/reset/email`, reqObj, axiosConfig)
			.then((res) => {
				if(res.data.success === false){
                    riviToasteer({
                        type:"danger",
                        message:res.data.message,
                    })
                }else{
                    riviToasteer({
                        type:"success",
                        message:res.data.message,
                    })
                }
			})
			.catch((err) => {
				console.log("AXIOS ERROR: ", err);
			})
    }

    const updatePassword = (token,password1,password2)=>{
        const reqObj = {
            password1,
            password2
        }
        axios.put(`https://rivi-test-backend.herokuapp.com/api/v1/user/reset/${token}`, reqObj, axiosConfig)
			.then((res) => {
				if(res.data.success === false){
                    riviToasteer({
                        type:"danger",
                        message:res.data.message,
                    })
                }else{
                    riviToasteer({
                        type:"success",
                        message:res.data.message,
                    })
                }
			})
			.catch((err) => {
				console.log("AXIOS ERROR: ", err);
			})
    }

    const getProfile = (token)=>{
        axios.get(`https://rivi-test-backend.herokuapp.com/api/v1/user/profile?token=${token}`, axiosConfig)
			.then((res) => {
				if(res.data.success === false){
                    riviToasteer({
                        type:"danger",
                        message:res.data.message,
                    })
                }else{
                    riviToasteer({
                        type:"success",
                        message:res.data.message,
                    })
                }
			})
			.catch((err) => {
				console.log("AXIOS ERROR: ", err);
			})
    }

    const getUserProfile = (token,id)=>{
        axios.get(`https://rivi-test-backend.herokuapp.com/api/v1/user/profile/${id}?token=${token}`, axiosConfig)
			.then((res) => {
				if(res.data.success === false){
                    riviToasteer({
                        type:"danger",
                        message:res.data.message,
                    })
                }else{
                    riviToasteer({
                        type:"success",
                        message:res.data.message,
                    })
                }
			})
			.catch((err) => {
				console.log("AXIOS ERROR: ", err);
			})
    }

    const updateProfile = (token,user)=>{
        const reqObj = user
        axios.put(`https://rivi-test-backend.herokuapp.com/api/v1/user/profile?token=${token}`,reqObj, axiosConfig)
			.then((res) => {
				if(res.data.success === false){
                    riviToasteer({
                        type:"danger",
                        message:res.data.message,
                    })
                }else{
                    riviToasteer({
                        type:"success",
                        message:res.data.message,
                    })
                }
			})
			.catch((err) => {
				console.log("AXIOS ERROR: ", err);
			})
    }

    const getChats = (token)=>{
        axios.get(`https://rivi-test-backend.herokuapp.com/api/v1/user/chats?token=${token}`, axiosConfig)
			.then((res) => {
				if(res.data.success === false){
                    riviToasteer({
                        type:"danger",
                        message:res.data.message,
                    })
                }else{
                    riviToasteer({
                        type:"success",
                        message:res.data.message,
                    })
                }
			})
			.catch((err) => {
				console.log("AXIOS ERROR: ", err);
			})
    }

    const getChatById = (token,id)=>{
        axios.get(`https://rivi-test-backend.herokuapp.com/api/v1/user/chats/${id}?token=${token}`, axiosConfig)
			.then((res) => {
				if(res.data.success === false){
                    riviToasteer({
                        type:"danger",
                        message:res.data.message,
                    })
                }else{
                    riviToasteer({
                        type:"success",
                        message:res.data.message,
                    })
                }
			})
			.catch((err) => {
				console.log("AXIOS ERROR: ", err);
			})
    }

    const report = (token,by,to,title,description)=>{
        const reqObj = {
            by,
            to,
            title,
            description,
        }
        axios.post(`https://rivi-test-backend.herokuapp.com/api/v1/user/report?token=${token}`,reqObj, axiosConfig)
			.then((res) => {
				if(res.data.success === false){
                    riviToasteer({
                        type:"danger",
                        message:res.data.message,
                    })
                }else{
                    riviToasteer({
                        type:"success",
                        message:res.data.message,
                    })
                }
			})
			.catch((err) => {
				console.log("AXIOS ERROR: ", err);
			})
    }

    const logout = () => {
        clearTimeout(loginTimeout)
        localStorage.clear();
        setIsLogged(false)
        setCurrentUser(null)
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
        setLoading(true)
          const foundUser = JSON.parse(loggedInUser);
          setToken(foundUser.token)
          let loginToken = foundUser.token
          axios.get(`https://rivi-test-backend.herokuapp.com/api/v1/user/getUser?token=${loginToken}`, axiosConfig)
          .then((res) => {
              if(res.data.success === false){
                  alert(res.data.message)
              }else{
                  setCurrentUser(res.data.user)
                  setIsLogged(true)
                  setLoading(false)
                  loginTimeout = setTimeout(() => {
                    logout()
                    setLoading(false)
                },foundUser.expiresIn-new Date())
              }
          })
          .catch((err) => {
              console.log("AXIOS ERROR: ", err);
          })  
        }
        // if(!isLogged){
        //     setCurrentUser(null)
        // }
    }, [isLogged]);

    const tempFakeLogin = () => {
        setLoading(true)
        setCurrentUser({
            username: "Gotabaya Rajapksha"
        })
        setIsLogged(true)
        setLoading(false)
    }

    const value = {
        loading,
        currentUser,
        tempFakeLogin,
        setLoading,
        login,
        signup,
        logout,
        verifyEmail,
        verify,
        resetEmail,
        updatePassword,
        getProfile,
        getUserProfile,
        updateProfile,
        getChats,
        getChatById,
        report
    } 

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )


}