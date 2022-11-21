import React, { useContext, useReducer } from "react";
import "./App.css"
import Navbar from "./Component/Navbar";
import { ProductContext } from "./Context/ProductContext";
import { ThemeContext } from "./Context/ThemeContext";
import MainRoutes from "./Routes/MainRoutes";

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
  
  const [state,dispatch] = useReducer(reducer,initialState)
const {isLight} = useContext(ThemeContext)
  

  
  return(
    <div className={`App ${isLight?"light":"dark"}`}>
      <MainRoutes/>
      <div className="b">
      <button onClick={()=>dispatch({type:"Icreament"})}>+</button>
                             {state}
      <button onClick={()=>dispatch({type:"Decreament"})}>-</button>
    </div>
   
    </div>
  )
}

export default App