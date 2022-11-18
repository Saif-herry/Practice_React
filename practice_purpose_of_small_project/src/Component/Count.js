import React from "react";
import { useReducer } from "react";


const reducer = (state,action) => {
    switch(action.type){
        case "Increament":{
            return state+1
        }
        case "Decreament":{
            return state-1
        }
        default:
            return state
    }

}
const initialState = 0;


const Count = () => {

const [state, dispatch] = useReducer(reducer,initialState)


    return (
        <div className="count">
        <button onClick={()=>dispatch({type:"Increament"})}>+</button>
                      {state}
        <button onClick={()=>dispatch({type:"Decreament"})}>-</button>
        </div>
    )
}

export default Count
