
import React from "react"
import { Routes,Route, Router } from "react-router-dom"
import Cart from "../Pages/Cart"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
const MainRoutes = ({crtdata,setCrtdata}) => {
    return(
        <div>
           <Routes>
            <Route path="/" element={<Home crtdata={crtdata} setCrtdata={setCrtdata}/>}/>

            <Route path="/cart" element={<Cart crtdata={crtdata} setCrtdata={setCrtdata}/>}/>

            <Route path="/login" element={<Login/>}/>
            </Routes> 
        </div>
    )
}


export default MainRoutes