import React from "react";
import { useReducer } from "react";
import reducer from "../Reducer/reducer";

const initialState =0;

// const reducer = (state,action) => {
    // console.log(state,action)
    //  if(action.type==="Increament"){
    //     return state+1;
    //  }
    //  else if(action.type==="Decrement"){
    //     return state-1;
    //  }

//    switch(action.type){
//     case "Increament":
//         return (state+=1)
//     case "Decreament":
//         let newcount= 0
//         state>=1?(newcount=state-1):(newcount=0)
//         return newcount
//     default:
//          return state
//    }

// }

const Count = () => {
    const [state,dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>{state}</p>
            <button onClick={()=>dispatch({type:"Increament"})}>+</button>
            <button onClick={()=>dispatch({type:"Decreament"})}>-</button>
        </div>
    )
}

export default Count;