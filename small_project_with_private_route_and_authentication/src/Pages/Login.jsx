import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const Login = () =>{
   const [logindata,setLogindata] = useState({})
   const {login} = useContext(AuthContext)
   const navigate = useNavigate()


    function handleChange(e){
        const {name,value} = e.target;
        setLogindata({
            ...logindata,
            [name]:value,
        })

    }

    
    
    function handleSubmit(e){
        e.preventDefault()
        console.log(logindata)
        login()
        navigate("/feed")

    }

    return(
        <div>
            <div className="loginparent">
                
            
            <h1>Login</h1>
            <form className="loginfrm" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Enter Email" onChange={handleChange}/>
            <input type="password" name="password" placeholder="Enter Password" onChange={handleChange}/>
            <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Login