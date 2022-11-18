import React from "react";
import { useReducer } from "react";


const reducer = (state,action) => {
    switch(action.type){
        case "Increament":{
            return state+action.payload
        }
        case "Decreament":{
            return state-action.payload
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
        <button onClick={()=>dispatch({type:"Increament",payload:50})}>+</button>
                      {state}
        <button onClick={()=>dispatch({type:"Decreament",payload:100})}>-</button>
        </div>
    )
}

export default Count
