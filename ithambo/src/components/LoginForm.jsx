import React, {useContext, useState} from 'react'
import { AppContext } from "../contexts/AppContext";
import "./LoginForm.css"
import PrimaryButton from "../components/PrimaryButton";
import SecondaryBtn from "../components/SecondaryBtn";
import {AiFillGoogleCircle} from "react-icons/ai"
import {IoClose} from "react-icons/io5"

const LoginForm = () => {

    const {  emailInput, setEmailInput, passwordInput, setPasswordInput} = useContext(AppContext);
    const [displayForm, setDisplayForm] = useState("none")

    const showForm = () => {
        setDisplayForm("block")
    }

    const hideForm = () => {
        setDisplayForm("none")
        console.log(displayForm)
    }

  return (
    <div className='form-container' style={{display: `${displayForm}`}}>
        <IoClose className= "icon" style= {{fontSize: "30px", color: "white"}} onClick= {hideForm}/>
        <form className= "auth-form">
        <div className= "toggle">
            <div><h2>Login</h2></div>
            <div><h2>Sign up</h2></div>
        </div>
            <div className= "form">

                <div className="user-input">
                    <label for = "email">E-mail</label>
                    <input name= "email" id='email' type= "email" value= {emailInput} placeholder= "Enter your email"/>
                </div>

                <div className="user-input">
                    <label for = "password">Password</label>
                    <input name= "password" id='password' type= "password" value= {passwordInput} placeholder= "Enter your password"/>
                </div>
                
                
            </div>
            <PrimaryButton btnText= "Login" />
                <SecondaryBtn btnText= "Login with google acccount" icon= {AiFillGoogleCircle}/>
        </form>
    </div>
  )
}

export default LoginForm