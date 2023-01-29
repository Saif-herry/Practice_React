import React from "react"
import useCounter from "./custom_hook/useCounter"

const Counter = () => {
   
    const [inc,incFun,decFun] = useCounter()
    
    return(
        <>
        <div style={{height:"200px",width:"40%",margin:"auto",marginTop:"50px",backgroundColor:"gray"}}> 
        <button onClick={incFun} style={{marginTop:"40px"}}>+</button>
        <h3>{inc}</h3>
        <button onClick={decFun}>-</button>
        </div>
        </>
    )
}

export default Counter