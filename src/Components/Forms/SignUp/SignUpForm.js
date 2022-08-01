import * as styles from "./scss/All.module.scss";
import Rivicon from "../../Icons/Rivicon";
import { useContext, useRef, useEffect } from "react";
import { useRivi } from "../../../Rivi.Context";
import React from 'react'
import axios from 'axios'
import { useAuth } from "../../../utilities/Auth.Context";

const SignUpForm = () => {

    const { setislogged } = useRivi();

    const [email,setEmail] = React.useState('')
    const [username,setUsername] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [mobile,setMobile] = React.useState('')
    const [image,setImage] = React.useState('')


    const {signup} = useAuth()

    async function handleSubmit(event){
        event.preventDefault()
        try{
            signup(username,email,password,mobile,image)
            setislogged(true)
        }catch(err){
            console.log(err)
        }
    }

    function handleChangeEmail(event){
        setEmail(event.target.value)
    }
    
    function handleChangeUserName(event){
        setUsername(event.target.value)
    }

    function handleChangePassword(event){
        setPassword(event.target.value)
    }

    function handleChangeMobile(event){
        setMobile(event.target.value)
    }

    function handleChangeImage(event){
        if(event.target.files[0]){
        setImage(event.target.files[0].name)
        }
    }

	return (
		<div className={styles.form}>
			<span className={styles.title}>Create New Account</span>
			<form>
                <div className={styles.formLeft}>
                    <input type="text" name="username" placeholder="User Name" className={styles.inputUserName} onChange={(e)=>handleChangeUserName(e)}/>
                    <input type="email" name="email" placeholder="Email" className={styles.inputEmail} onChange={(e)=>handleChangeEmail(e)}/>
                    <input type="text" name="mobile" placeholder="Mobile" className={styles.inputPassword} onChange={(e)=>handleChangeMobile(e)}/>
                    <input type="password" name="password" placeholder="Password" className={styles.inputPassword} onChange={(e)=>handleChangePassword(e)}/>
                </div>
				<div className={styles.formRight}>
                <div className={styles.imageArea}>
                        {image ? (<React.Fragment>Uploaded: <div>{image}</div></React.Fragment>)  : "Drag or click to upload a profile image"}
                        <input type="file" className={styles.inputImage} name="image" accept="image/png, image/jpeg" onChange={(e)=>handleChangeImage(e)} />
                </div>              
                    
                    {/* <input type="button" name="userimage" value="User Image" className={styles.inputUserImage} /> */}
                </div>                
				<div className={styles.formBottom}>
                    <label className={styles.conditions}>
                        <input type="checkbox" className={styles.inputCheck} />
                        <span className={styles.checkBg}></span>
                        Accept our <span className={styles.important}>Terms and Conditions</span>
                    </label>
                    <input type="submit" value="Create" className={styles.createBtn} onClick={(e)=>handleSubmit(e)}/>
                </div>
			</form>

			{/* <span className={styles.divider}>OR</span> */}
			<div className={styles.googleAuth}>
				<span>Fill with</span>
				<div className={styles.googleFill}>
					<Rivicon i="GoogleIcon" s="48" mt={5} selected={false} nav={false} />
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
