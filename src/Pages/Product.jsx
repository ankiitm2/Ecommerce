import React, { useContext } from "react";
import { HomeContext } from "../components/Context/HomeContext";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

const Product = () => {
    const { allProduct } = useContext(HomeContext);
    const { productId } = useParams();
    const product = allProduct.find((e) => e.id === Number(productId));

    return (
        <div className="Product">
            <BreadCrumbs product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox product={product} />
            <RelatedProducts />
        </div>
    )
}
export default Product