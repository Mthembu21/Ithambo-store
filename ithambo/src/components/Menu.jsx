import React, {useContext, useState} from 'react'
import { AppContext } from "../contexts/AppContext";
import {useNavigate} from "react-router-dom"
import { HiOutlineMenu } from "react-icons/hi";
import {IoClose} from "react-icons/io5"

const Menu = () => {
  const {showForm, hideForm, displayForm} = useContext(AppContext);
  const [show, setShow] = useState(true)
  const [value, setValue] = useState("none")
  const navigate = useNavigate()

  const showMenu = () => {
    setValue("block")
    setShow(false)
  }

  const hideMenu = () => {
    setValue("none")
    setShow(true)
  }
  return (
    <div className="nav">
      <div className="logo">Ithambo</div>
      {show ? <HiOutlineMenu className="hamburger" onClick= {showMenu} /> : <IoClose className= "close" onClick={hideMenu}/>}

      <div className= "nav-bar">
        <ul>
          <li onClick= {() => navigate("/")}>
            <a>Home</a>
          </li>
          <li onClick= {() => navigate("/catalog")}>
            <a>Catalog</a>
          </li>
          <li onClick={() => navigate("/About")}>
            <a>About</a>
          </li>
          <li onClick={() => navigate("/Contact")}>
            <a>Contact</a>
          </li>
          <li>
            <a>Cart</a>
          </li>
          <li onClick={showForm}>
            <a>Login</a>
          </li>
        </ul>
      </div>

      <div className= "responsive-nav" style= {{display: `${value}`}}>
        <ul>
          <li onClick= {() => navigate("/")}>
            <a>Home</a>
          </li>
          <li onClick= {() => navigate("/catalog")}>
            <a>Catalog</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Cart</a>
          </li>
          <li onClick={showForm}>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
