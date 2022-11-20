import React, { useContext, useReducer } from "react";
import "./App.css"
import Navbar from "./Component/Navbar";
import { ThemeContext } from "./Context/ThemeContext";

const reducer = (state,action) => {
      switch(action.type){
        case "Icreament":
          return state+1
        case "Decreament":
          return state-1
        default:
         return state
      }
}

const initialState = 0;

const App = () => {
   const {isLight} = useContext(ThemeContext)
  const [state,dispatch] = useReducer(reducer,initialState)

  return(
    <div className={`App ${isLight?"light":"dark"}`}>
      <Navbar/>
      <div className="b">
        
      
      <button onClick={()=>dispatch({type:"Icreament"})}>+</button>
                             {state}
      <button onClick={()=>dispatch({type:"Decreament"})}>-</button>
    </div>
    </div>
  )
}

export default App