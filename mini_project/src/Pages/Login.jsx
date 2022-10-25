

import React, { useContext } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"

const Login = () =>{
const [logindata,setLoginData] = useState({})
const {Login} = useContext(AuthContext)
const navigate = useNavigate()

    const handleChange=(e)=>{
       const {name,value} = e.target;
       setLoginData({
        ...logindata,
        [name]:value
       })
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        Login()
        navigate("/feed")
        console.log(logindata)
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="loginfrm">
             <h1>Login Here</h1>
           <input type="email" name="email" placeholder="ENter your Emaiil" onChange={handleChange}/> 
           <input type="password" name="password" placeholder="Enter your Password" onChange={handleChange}/>
           <button type="submit">Submit</button>
           </form>
        </div>
    )
}

export default Login