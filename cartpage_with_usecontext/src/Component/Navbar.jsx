import React, { useContext } from "react"
import {NavLink} from "react-router-dom"
import { CrtContext } from "../Context"
const Navbar = () =>{
const {crtdata} = useContext(CrtContext)
    return(
        <div className="nav">
            <NavLink className="a" to="/">Home</NavLink>
            <NavLink className="a" to="/cart">Cart({crtdata.length})</NavLink>
            <NavLink className="a" to="/login">Login</NavLink>
            
        </div>
    )
}


export default Navbar