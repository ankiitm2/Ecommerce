import React, { useContext, useState } from "react";
import { HomeContext } from "../components/Context/HomeContext";
import Item from "../components/Item/Item";

const HomeCategory = (props) => {
    const { allProduct } = useContext(HomeContext);
    const [sortBy, setSortBy] = useState("default");

    const sortProducts = (products) => {
        switch (sortBy) {
            case "price-low-to-high":
                return [...products].sort((a, b) => a.new_price - b.new_price);
            case "price-high-to-low":
                return [...products].sort((a, b) => b.new_price - a.new_price);
            default:
                return products;
        }
    };
    const sortedProducts = sortProducts(allProduct);

    return (
        <div className="HomeCategory">
            <div className="banner">
                <img src={props.banner} alt="" className="w-full" />
            </div>

            <div className="main-section">
                <div className="upper-section flex justify-between m-2">
                    <p className="mx-4 mt-2 text-sm text-gray-600 font-bold">Showing Results</p>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="p-2 border border-1 border-gray-600 mx-3 text-sm font-bold text-gray-600"
                    >
                        <option value="default" >Default</option>
                        <option value="price-low-to-high" >Price Low to High</option>
                        <option value="price-high-to-low" >Price High to Low</option>
                    </select>
                </div>
                <div className="cards-section flex flex-wrap gap-4 justify-center">
                    {sortedProducts.map((product, i) => {
                        if (props.category === product.category) {
                            return (
                                <Item
                                    key={i}
                                    id={product.id}
                                    img={product.image}
                                    name={product.name}
                                    old_price={product.old_price}
                                    new_price={product.new_price}
                                />
                            );
                        }
                        return null;
                    })}
                </div>
            </div>


        </div>
    )
}
export default HomeCategory