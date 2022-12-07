import React from 'react'

const LoginForm = () => {
  return (
    <div>
        <form>
            <div>
                <h2>Login</h2>

                <div className="user-input">
                    <label for = "email">E-mail</label>
                    <input name= "email" id='email' type= "email" value= {emailInput} placeholder= "Enter your email"/>
                </div>

                <div className="user-input">
                    <label for = "password">Password</label>
                    <input name= "password" id='password' type= "password" value= {passwordInput} placeholder= "Enter your password"/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default LoginForm