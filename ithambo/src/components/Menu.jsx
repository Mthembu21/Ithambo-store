import React, {useState} from "react";
import { HiOutlineMenu } from "react-icons/hi";

const Menu = () => {

  const [show, setShow] = useState(false)
  const [value, setValue] = useState("none")

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
          <li>
            <a>Home</a>
          </li>
          <li>
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

      <div className= "responsive-nav" style= {{display: `${value}`}}>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
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
