import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = (props) => {
  const navigate = useNavigate();

  const { searchTerm, setSearchTerm, SearchProducts } = useContext(AppContext);
  return (
    <div className="product-card">
      <img src={props.img} />
      <div className= "details">
      <p className= "title">{props.title}</p>
      <p>R {props.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
