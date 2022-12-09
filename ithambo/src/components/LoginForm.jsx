import React, { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import "./LoginForm.css";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryBtn from "../components/SecondaryBtn";
import { AiFillGoogleCircle } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const LoginForm = () => {
  const {
    emailInput,
    setEmailInput,
    passwordInput,
    setPasswordInput,
    showForm,
    hideForm,
    displayForm,
  } = useContext(AppContext);

  const [login, setLogin] = useState(true);
  const [signUpBlock, setSignUpBlock] = useState("grey");
  const [loginBlock, setLoginBlock] = useState("white");

  const toggleSignUp = () => {
    setLogin(false);
    setSignUpBlock("white");
    setLoginBlock("grey");
  };

  const toggleLogin = () => {
    setLogin(true);
    setSignUpBlock("grey");
    setLoginBlock("white");
  };

  return (
    <div className="form-container" style={{ display: `${displayForm}` }}>
      <IoClose
        className="icon"
        style={{ fontSize: "30px", color: "white" }}
        onClick={hideForm}
      />
      <form className="auth-form">
        <div className="toggle">
          <div className="block-1" onClick={toggleLogin} style= {{backgroundColor: `${loginBlock}`}}>
            <h2>Login</h2>
          </div>
          <div className="block-2" onClick={toggleSignUp} style= {{backgroundColor: `${signUpBlock}`}}>
            <h2>Sign up</h2>
          </div>
        </div>
        {login ? (
          <>
            <div className="form">
              <div className="user-input">
                <label for="email">E-mail</label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  value={emailInput}
                  placeholder="Enter your email"
                />
              </div>

              <div className="user-input">
                <label for="password">Password</label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  value={passwordInput}
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <PrimaryButton btnText="Login" />
            <SecondaryBtn
              btnText="Login with google acccount"
              icon={AiFillGoogleCircle}
            />
          </>
        ) : (
          <>
            <div className="form">
            <div className="user-input">
                <label for="email">Name</label>
                <input
                  name="email"
                  id="email"
                  type="text"
                  value={emailInput}
                  placeholder="Enter your first name"
                />
              </div>

              <div className="user-input">
                <label for="email">Last Name</label>
                <input
                  name="text"
                  id="email"
                  type="email"
                  value={emailInput}
                  placeholder="Enter your last name"
                />
              </div>

              <div className="user-input">
                <label for="email">E-mail</label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  value={emailInput}
                  placeholder="Enter your email"
                />
              </div>

              <div className="user-input">
                <label for="password">Password</label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  value={passwordInput}
                  placeholder="Enter your password"
                />
              </div>

              <div className="user-input">
                <label for="password">Confirm password</label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  value={passwordInput}
                  placeholder="Re-enter your password"
                />
              </div>
            </div>
            <PrimaryButton btnText="Login" />
            <SecondaryBtn
              btnText="Login with google acccount"
              icon={AiFillGoogleCircle}
            />
          </>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
