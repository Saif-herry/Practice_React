import React from "react"
import { useState } from "react"
import useCounter1 from "./custom_hook/useCounter1"

const Counter1 = () => {

    const [inc,handleIncFun,handleDecFun] = useCounter1()
    

    return(
        <>
        <div>
            <button onClick={handleIncFun}>+</button>
            <h3>{inc}</h3>
            <button onClick={handleDecFun}>-</button>
        </div>
        </>
    )
}

export default Counter1