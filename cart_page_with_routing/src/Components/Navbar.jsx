
import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {

    return(
        <div className="nav">

            <NavLink className="a" to="/">Home</NavLink>
        <NavLink className="a" to="/cart">Cart</NavLink>
        <NavLink className="a" to="/login">Login</NavLink>
        </div>
    )
}

export default Navbar
