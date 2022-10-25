import React from "react";
import {NavLink,useNavigate} from "react-router-dom"
import {AuthContext} from "../Context/AuthContext"
import {useContext} from "react"


const Navbar = () =>{
  const {isAuth,logout} = useContext(AuthContext);
const navigate = useNavigate()

    function handleclick(){
      if(isAuth){
        logout()
        navigate("/")

      }else{
        navigate("/login")
      }
      
    };

    return(
        <div className="nav">
          <NavLink className="a" to="/">Home</NavLink>
          <NavLink className="a" to="/post">Post</NavLink>
          <NavLink className="a" to="/feed">Feed</NavLink>
          <button className="b" onClick={handleclick}>{isAuth?"logout":"login"}</button>  
        </div>
    )
}

export default Navbar