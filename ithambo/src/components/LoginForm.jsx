import React, {useContext} from 'react'
import { AppContext } from "../contexts/AppContext";
import "./LoginForm.css"
import PrimaryButton from "../components/PrimaryButton";
import SecondaryBtn from "../components/SecondaryBtn";
import {AiFillGoogleCircle} from "react-icons/ai"

const LoginForm = () => {

    const {  emailInput, setEmailInput, passwordInput, setPasswordInput} = useContext(AppContext);
  return (
    <div>
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