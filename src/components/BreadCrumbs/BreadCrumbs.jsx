import React from "react";
import Arrow from "../../Assets/breadcrum_arrow.png"
import home from "../../Assets/home.png"
import { Link } from "react-router-dom";

const BreadCrumbs = (props) => {
    const { product } = props;
    return (
        <h1 className="flex items-center gap-1 capitalize mt-4 mx-3 pb-1">
            <Link to={"/"}><img className="w-6" src={home} alt="" /></Link> <img className="w-3 h-fit" src={Arrow} alt="" /><Link to={"/women"}>{product.category}</Link> <img className="w-3 h-fit" src={Arrow} alt="" /> {product.name}
        </h1>
    )
}

export default BreadCrumbs