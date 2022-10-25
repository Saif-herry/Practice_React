
import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "../Component/Navbar"
import RequireAuth from "../hoc/RequireAuth"
import About from "../Pages/About"
import Cart from "../Pages/Cart"
import Feed from "../Pages/Feed"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import { useParams } from "react-router-dom"


function AllRoutes(){
    // const [cart,setCart] = useState([])
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<RequireAuth><About/></RequireAuth>}/>
                <Route path="/feed" element={<RequireAuth><Feed/></RequireAuth>}/>
                <Route path="/cart" element={<RequireAuth><Cart/></RequireAuth>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    )
}

export default AllRoutes