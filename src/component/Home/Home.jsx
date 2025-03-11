import React  from "react";
import Hero from "../hero/Hero";
import Products from "../Products/Products";
import TopProducts from "../TopProducts/TopProducts";
import Banner from "../banner/banner";
export default ()=>{
    return(<>
      <div>
        <Hero/>
        <Products/>
        <TopProducts/>
        <Banner/>
      </div>

    </>)

}