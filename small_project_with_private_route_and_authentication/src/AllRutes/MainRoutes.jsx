import React from "react";
import {Routes,Route} from "react-router-dom"
import Navbar from "../Component/Navbar";
import RequiredAuth from "../hoc/RequiredAuth";
import Feed from "../Pages/Feed";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Post from "../Pages/Post";

const MainRoutes = () =>{


    return(
        <div>
            <div>
                <Navbar/>
            </div>
           <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/post" element={<RequiredAuth><Post/></RequiredAuth>} />
            <Route path="/feed" element={<RequiredAuth><Feed/></RequiredAuth>}/>
            <Route path="/login" element={<Login/>}/>
            </Routes> 
        </div>
    )
}

export default MainRoutes