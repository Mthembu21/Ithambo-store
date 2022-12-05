import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import "./FilterContainer.css";

const FilterContainer = () => {
  const navigate = useNavigate();

  const { filterCategory, setFilterCategory, sortBy, setSortBy } = useContext(AppContext);
  return (
    <div className="filter">
        <div className="sort">
            <label htmlFor="category">Filter by category: </label>
            <select name="category" id="category" onChange= {(e) => setFilterCategory(e.target.value)}>
                <option value= "">All</option>
                <option value= "accessories">Accessories</option>
                <option value= "car-parts">Car parts</option>
                <option value= "electronics">Electronics</option>
                <option value= "tools">Tools</option>
            </select>
        </div>

        <div className="sort">
        <label htmlFor="sort">Sort by price: </label>
            <select name="sort" id="sort" onChange= {(e) => setSortBy(e.target.value)}>
                <option value= "">Default</option>
                <option value= "accessories">Low to high</option>
                <option value= "car-parts">High to low</option>
            </select>
        </div>
    </div>
  );
};

export default FilterContainer;
