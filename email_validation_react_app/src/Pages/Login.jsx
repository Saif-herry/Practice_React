import React, { useState } from "react";

const Login = () => {
    const [logindata,setLoginData] = useState({
        email:"",
        password:"",
    })

    const handleChange=(e)=>{
        
     setLoginData({
        ...logindata,
        [e.target.name]:e.target.value
       })
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      const getUserdata = JSON.parse(localStorage.getItem("local"))

      const {email,password} = logindata

      if(getUserdata && getUserdata.length){
        const userLogin = getUserdata.filter((item)=>{
            return item.email===email && item.password === password
        })

        if(userLogin.length===0){
            alert("Invalid Credential")
        }
        else{
            alert("Login Successfull Enjoy Coding!!!")
        }
      }

      console.log(email,password,"sss")
      console.log(getUserdata)
      
    }
    
    return(
        <div>
            
        
        <div className="logindiv">
            <h1>Login!</h1>

            <form className="loginform">
                <label>Email</label>
                
                <input type="email" name="email" value={logindata.email} onChange={handleChange}/>
                 
                <label>Password</label>
                <input type="password" name="password" value={logindata.password} onChange={handleChange}/>
            
                <button onClick={handleSubmit}>SignIn</button>
            </form>
        </div>
        </div>
    )

}

export default Login;