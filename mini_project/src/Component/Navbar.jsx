import React from "react"
import {NavLink} from "react-router-dom"
function Navbar(){

    return(
        <div className="nav">
          <NavLink className="a" to="/">Home</NavLink>
          {/* <NavLink className="a" to="/about">About</NavLink>   */}
          <NavLink className="a" to="/cart">Cart</NavLink>
        </div>
    )
}

export default Navbar