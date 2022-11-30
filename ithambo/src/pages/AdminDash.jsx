import React from "react";
import "./AdminDash.css"
import {AiOutlineShopping, AiOutlineUsergroupAdd, AiOutlineSetting} from "react-icons/ai"
import {BsCartCheck} from "react-icons/bs"
import {useNavigate} from "react-router-dom"

const AdminDash = () => {

    const navigate = useNavigate()
  return(
  <div className= "admin">
    <div className= "dash-container">

        <div className= "header"><h1>Dashboard</h1></div>

        <div onClick= {() => navigate("/newproduct")} className= "click-items">
            <h2><AiOutlineShopping style= {{fontSize: "35px"}}/> Upload new products</h2>
        </div>

        <div onClick= {() => navigate("/orders")} className= "click-items">
            <h2><BsCartCheck style= {{fontSize: "35px"}}/> Orders</h2>
        </div>

        <div onClick= {() => navigate("/customers")} className= "click-items">
            <h2><AiOutlineUsergroupAdd style= {{fontSize: "35px"}}/> Customers</h2>
        </div>

        <div onClick= {() => navigate("/settings")} className= "click-items">
            <h2><AiOutlineSetting style= {{fontSize: "35px"}}/> Settings</h2>
        </div>
    </div>
  </div>
  );
};

export default AdminDash;
