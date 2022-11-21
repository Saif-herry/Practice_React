import React from "react";
import { Route,Routes } from "react-router-dom";

import CartPage from "../Component/CartPage";
import Navbar from "../Component/Navbar";
import HomePage from "../Pages/HomePage";

const MainRoutes = () => {

    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
            </Routes>
            
        </div>
    )
}

export default MainRoutes;