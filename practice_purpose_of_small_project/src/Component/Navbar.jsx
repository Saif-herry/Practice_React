import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";


const Navbar = () => {
    const {isLight,toggleTheme} = useContext(ThemeContext)
    return(
        <div className="nav">
            <NavLink className="a" to="/">Home Page</NavLink>
            <button onClick={toggleTheme}>{`Make ${isLight?"Turquoise":"Blue"}`}</button>
        </div>
    )
}

export default Navbar;