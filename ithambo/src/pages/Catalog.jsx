import React from "react";
import { useNavigate } from "react-router-dom";
import "./Catalog.css";

const Catalog = () => {
  const navigate = useNavigate();
  return (
    <div className="catalog">
      <h1>Catalog</h1>

      <div className="flex-container">
      
        <div className="catalog-container tools" onClick={navigate("/tools")}>
          <h2 id="overlay">Tools</h2>
        </div>

        <div className="catalog-container parts" onClick={navigate("/parts")}>
          <h2 className="overlay">Parts</h2>
        </div>

        <div className="catalog-container electronics" onClick={navigate("/electronics")}>
          <h2 className="overlay">Electronics</h2>
        </div>

        <div className="catalog-container accessories" onClick={navigate("/accessories")}>
          <h2 className="overlay">Accessories</h2>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
