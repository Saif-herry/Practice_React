import React from "react"
import { useContext } from "react"
import {NavLink,useNavigate} from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"


const Navbar=()=>{
const {isAuth,Logout} = useContext(AuthContext)
const navigate = useNavigate()

  const handleLogin=()=>{
    if(isAuth){
      Logout()
      navigate("/")
    }
    else{
      navigate("/login")
    }
    
  }

    return(
        <div className="nav">
          <NavLink className="a" to="/">Home</NavLink>
          <NavLink className="a" to="/about">About</NavLink> 
          <NavLink className="a" to="/feed">Feed</NavLink> 
          <NavLink className="a" to="/cart">Cart</NavLink>
          <button onClick={handleLogin}>{isAuth?"Logout":"Login"}</button>
        </div>
    )
}

export default Navbar