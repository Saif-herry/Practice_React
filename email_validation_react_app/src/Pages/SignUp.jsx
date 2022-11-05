import React, { useEffect, useState } from "react";
import Validation from "./Validation";

const SignUp = ({submitForm}) =>{
    const [val,setVal] = useState({
        fullname:"",
        email:"",
        password:"",
    });

    const [error,setError] = useState({});
    const [dataIsCorrect,setDataIsCorrect] = useState(false)

    const handleChange = (e) =>{
setVal({
    ...val,
    [e.target.name]:e.target.value,
});
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault()
        setError(Validation(val));
        setDataIsCorrect(true)
    }

    useEffect(()=>{
        if(Object.keys(error).length===0 && dataIsCorrect){
            submitForm(true)
        }
    },[error])
    return (
        <div>
            <div className="signupWrapper">

            <h1 className="a">SIgnUp</h1>

            <form className="signupform">
                
                    <div>
                    <label>Full Name</label>
                    <input type="text" name="fullname" value={val.fullname} onChange={handleChange}/>
                    {error.fullname && <p>{error.fullname}</p>}
                    </div>
                    
                    <div>
                    <label>Email</label>
                    <input type="email" name="email" value={val.email} onChange={handleChange}/>
                    {error.email && <p>{error.email}</p>}
                    </div>
                     
                    <div>
                    <label>Password</label>
                    <input type="password" name="password" value={val.password} onChange={handleChange}/>
                    {error.password && <p>{error.password}</p>}
                    </div>
                      
                    <div>
                    <button onClick={handleFormSubmit}>Sign Up</button>
                    </div>
                
            </form>
            </div>
        </div>
    )
}

export default SignUp
