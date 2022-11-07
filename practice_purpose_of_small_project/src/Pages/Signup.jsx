import React, { useState } from "react";

const Signup = () => {
    const [data,setData] = useState({fullname:"",email:"",password:""})

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        })

    }
    const handleClick = (e) => {
        e.preventDefault()

    } 

    return (
        <div>
            <form className="formWrapp">
                <div>
                    <label>Full Name</label>
                    <input type="text" name="fullname" value={data.fullname} onChange={handleChange}/>
                </div>

                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={data.email} onChange={handleChange}/>
                </div>

                <div>
                    <label>Password</label>
                    <input type="text" name="password" value={data.password} onChange={handleChange}/>
                </div>
                 <div>
                 <button onClick={handleClick}>SignUp</button>
                 </div>
            </form>
        </div>
    )
}

export default Signup;