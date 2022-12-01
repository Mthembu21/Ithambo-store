import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import "./SearchBar.css";

const SearchBar = () => {
  const navigate = useNavigate();

  const { searchTerm, setSearchTerm, SearchProducts } = useContext(AppContext);
  return (
    <div className="search-bar">
      <input
        placeholder="Search"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <AiOutlineSearch style={{ fontSize: "30px" }} className= "search-icon" onClick= {SearchProducts} />
    </div>
  );
};

export default SearchBar;
