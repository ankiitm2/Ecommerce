import React from "react";
import Hero from "../components/Hero/Hero";
import Offers from "../components/Offers/Offers";
import Popular from "../components/Popular/Popular";
import NewCollections from "../components/NewCollections/NewCollections"
import NewsLetter from "../components/NewsLetter/NewsLetter";

const Home = () => {
    return (
        <div className="Home">
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetter />
        </div>
    )
}
export default Home