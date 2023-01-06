import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decFun, incFun } from "../Store/action";

const Counter = ()=>{
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h3>Counter:{count}</h3>
            <div>
                <button onClick={()=>dispatch(incFun(1))}>+</button>
                <button onClick={()=>dispatch(decFun(1))}>-</button>
            </div>
        </div>
    )
}

export default Counter;