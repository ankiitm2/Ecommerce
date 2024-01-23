import React, { createContext } from "react";
import allProduct from "../../Assets/all_product"

export const HomeContext = createContext(null);

const HomeContextProvider = (props) => {

    const ContextValue = { allProduct }

    return (
        <HomeContext.Provider value={ContextValue}>
            {props.children}
        </HomeContext.Provider>
    )
}
export default HomeContextProvider