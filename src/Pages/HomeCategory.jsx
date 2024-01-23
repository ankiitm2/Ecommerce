import React, { useContext } from "react";
import { HomeContext } from "../components/Context/HomeContext";
import Item from "../components/Item/Item";

const HomeCategory = (props) => {
    const { allProduct } = useContext(HomeContext);
    return (
        <div className="HomeCategory">
            <div className="banner">
                <img src={props.banner} alt="" className="w-full" />
            </div>

            <div className="main-section">
                <div className="upper-section flex justify-between m-2">
                    <p>Showing Results 1-12</p>
                    <p>Sort by</p>
                </div>
                <div className="cards-section flex flex-wrap gap-4 justify-center">
                    {allProduct.map((product, i) => {
                        if (props.category === product.category) {
                            return <Item key={i} id={product.id} img={product.image} name={product.name} old_price={product.old_price} new_price={product.new_price} />
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>


        </div>
    )
}
export default HomeCategory