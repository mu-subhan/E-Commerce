import React from "react";
import BottomHeader from "../components/Header/BottomHeader";
import HeroSection from "../components/Home/HeroSection";
import PopularProduct from "../components/Home/PopularProduct";
import BestSellerProducts from "../components/Home/BestSellerProducts";
import Layout from "../components/common/Layout";

const Home = () => {
    return ( 
        <Layout>
            <BottomHeader/>
            <HeroSection/>
            <PopularProduct/>
            <BestSellerProducts/>
            </Layout>
     );
}
 
export default Home;