import * as styles from "./scss/All.module.scss";
import { useContext } from "react";
import { useRivi } from "../../../Rivi.Context";
import Rivicon from "../../Icons/Rivicon";
import React from 'react';
import axios from 'axios';
import { useAuth } from "../../../utilities/Auth.Context";

const SignInForm = () => {
	const { setislogged, riviToasteer } = useRivi();
	const [email,setEmail] = React.useState('')
	const [password,setPassword] = React.useState('')
	const [response,setResponse] = React.useState('')

	const {login} = useAuth()

	function handleChangeEmail(event){
		setEmail(event.target.value)
	}

	function handleChangePassword(event){
		setPassword(event.target.value)
	}

	async function onSubmit(e){
		e.preventDefault()

		try{
			await login(email,password)
			setislogged(true)
		}catch(err){
			console.log(err)
		}
		// const reqObject = {
		// 	email,
		// 	password
		// } 
		// let axiosConfig = {
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// };

		// axios.post('http://localhost:8080/api/v1/user/signin', reqObject, axiosConfig)
		// 	.then((res) => {
		// 		if(res.data.success === true){
		// 			console.log(res.data)
		// 			setislogged(true)
		// 		}else if(res.data.message === 'Invalid email'){
		// 			//make the err message
		// 			alert('Invalid email')		
		// 		}	
		// 		else if(res.data.message === 'Invalid password'){
		// 			//make the err message
		// 			alert('Invalid password')
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		console.log("AXIOS ERROR: ", err);
		// 	})

	}

	return (
		<div className={styles.form}>
			<span className={styles.title}>Login to your Account</span>
			<form>
				<input type="email" name="email" placeholder="Email" onChange={(e)=>handleChangeEmail(e)} className={styles.inputEmail} required/>
				<input type="password" name="password" placeholder="Password" onChange={(e)=>handleChangePassword(e)} className={styles.inputPassword} required/>
				<input
					type="submit"
					value="Login"
					className={styles.loginBtn}
					onClick={(e) => {
						// setislogged(true);
						onSubmit(e);
					}}
				/>
			</form>

			<span className={styles.divider}>OR</span>
			<div className={styles.googleAuth}>
				<span>Login with</span>
				<div className={styles.googleLogin} onClick={()=>{riviToasteer({type:"warning",message:"Google Login Unavailabe"})}}>
					<Rivicon i="GoogleIcon" s="45" mt={20} selected={false} nav={false} />
				</div>
			</div>
		</div>
	);
};

export default SignInForm;
