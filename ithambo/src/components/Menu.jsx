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

  const navigateHome = () => {
    hideMenu()
    navigate("/")
  }

  const navigateCatalog = () => {
    hideMenu()
    navigate("/catalog")
  }

  const navigateAbout = () => {
    hideMenu()
    navigate("/about")
  }

  const navigateContact = () => {
    hideMenu()
    navigate("/contact")
  }


  return (
    <div className="nav">
      <div className="logo">Ithambo</div>
      {show ? <HiOutlineMenu className="hamburger" onClick= {showMenu} /> : <IoClose className= "close" onClick={hideMenu}/>}

      <div className= "nav-bar">
        <ul>
          <li onClick= {navigateHome}>
            <a>Home</a>
          </li>
          <li onClick= {navigateCatalog}>
            <a>Catalog</a>
          </li>
          <li onClick={navigateAbout}>
            <a>About</a>
          </li>
          <li onClick={navigateContact}>
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
        <li onClick= {navigateHome}>
            <a>Home</a>
          </li>
          <li onClick= {navigateCatalog}>
            <a>Catalog</a>
          </li>
          <li onClick={navigateAbout}>
            <a>About</a>
          </li>
          <li onClick={navigateContact}>
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
