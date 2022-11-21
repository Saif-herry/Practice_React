import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";


const Navbar = () => {
    const {isLight,toggleTheme} = useContext(ThemeContext)
    return(
        <div className="nav">
            <div>
            <NavLink className="a" to="/">Home Page</NavLink>
            </div>
            <div>
            <button onClick={toggleTheme}>{`Make ${isLight?"Turquoise":"Blue"}`}</button>  
            </div>
           
        </div>
    )
}

export default Navbar;