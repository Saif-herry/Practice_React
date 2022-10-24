
import React from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "../Component/Navbar"
import About from "../Pages/About"
import Cart from "../Pages/Cart"
import Home from "../Pages/Home"


function AllRoutes(){

    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </div>
    )
}

export default AllRoutes