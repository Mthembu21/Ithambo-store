import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import FilterContainer from "../components/FilterContainer";
import Searchbar from "../components/SearchBar";
import Heading from "../components/Heading";
import { products } from "../assets/data";
import "./Products.css";

const Products = () => {
  const navigate = useNavigate();
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
    </div>
  );
};

export default Products;
