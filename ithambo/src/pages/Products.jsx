import React, {useContext, useState} from 'react'
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import FilterContainer from "../components/FilterContainer";
import Searchbar from "../components/SearchBar";
import LoginForm from "../components/LoginForm";
import Heading from "../components/Heading";
import { products } from "../assets/data";
import "./Products.css";
import PrimaryButton from "../components/PrimaryButton";

const Products = () => {
  const navigate = useNavigate();

  const {showForm, hideForm, displayForm} = useContext(AppContext);
  return (
    <div className="products">
      <div className="filter-bar">
        <Searchbar />
        <FilterContainer />
      </div>

      <Heading text="Catalog" />
      <div className="display-container">
        {products.map((item) => (
          <ProductCard img={item.img} price={item.price} title={item.name} />
        ))}
      </div>

      <LoginForm/>
      <PrimaryButton btnText= "Show form" function= {showForm}/>
    </div>
  );
};

export default Products;
