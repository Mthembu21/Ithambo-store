import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import { HiOutlineMenu } from "react-icons/hi";

const Menu = () => {

  const [show, setShow] = useState(false)
  const [value, setValue] = useState("none")
  const navigate = useNavigate()

  const showMenu = () => {
    setShow(prev => !prev)

    setValue(show ? "block" : "none")
  }
  return (
    <div className="nav">
      <div className="logo">Ithambo</div>
      <HiOutlineMenu className="hamburger" onClick= {showMenu} />

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
        </ul>
      </div>
    </div>
  );
};

export default Menu;
