
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {


    // email: "eve.holt@reqres.in",
  // password: "pistol",
  const navigate = useNavigate()
    const [inputdata,setInputData] = useState({
        email:"",password:""
    })

    const FetchFunction = ({email,password}) => {
        fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
                email:email,
                password:password,
            })
        }).then((res)=>res.json()).then((data)=>{
            console.log(data.token)
            if(data.token){
                navigate("/cart")
            }
        })
    }

    const handleChange = (e) => {
        setInputData({
            ...inputdata,
            [e.target.name]:e.target.value
        })
    }
    const handleFormSubmit = (e) => {
        
        console.log(e,"sssss")
       e.preventDefault()
       FetchFunction(inputdata)
    }
    return(
        <div>
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
            <label>Email</label>
            <input type="email" name="email" value={inputdata.email} onChange={handleChange} />

            <label >Password</label>
            <input type="password" name="password" value={inputdata.password} onChange={handleChange}/>

            <button>Login</button>
        </form>
    </div>
    )
}


export default Login
