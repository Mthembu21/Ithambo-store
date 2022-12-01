import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import "./SearchBar.css";

const ProductCard = () => {
  const navigate = useNavigate();

  const { searchTerm, setSearchTerm, SearchProducts } = useContext(AppContext);
  return (
    <div className="product-card">
      <img src={props.img} />
      <h3>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
};

export default ProductCard;
