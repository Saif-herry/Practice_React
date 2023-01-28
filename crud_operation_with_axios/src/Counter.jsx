import React from "react"
import { useState } from "react"

const Counter = () => {
    const [inc,setInc] = useState(0)
    
    return(
        <>
        <button onClick={()=>setInc(inc+1)}>+</button>
        <h3>{inc}</h3>
        <button onClick={()=>setInc(inc-1)}>-</button>
        </>
    )
}

export default Counter