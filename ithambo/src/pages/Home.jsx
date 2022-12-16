import React from "react"
import ProductSlider from "../components/ProductSlider"
import FilterContainer from "../components/FilterContainer";

const Home = () => {
    return(
        <div>
            <div className = "hero">
                <h1>iThambo Store</h1>
            </div>
            <ProductSlider/>
        </div>
    )
}

export default Home;