import React, { useContext, useReducer } from "react";
import "./App.css"
import Navbar from "./Component/Navbar";
import { ProductContext } from "./Context/ProductContext";
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
  const {data,setData} = useContext(ProductContext)
   const {isLight} = useContext(ThemeContext)
  const [state,dispatch] = useReducer(reducer,initialState)

  console.log(data)
  return(
    <div className={`App ${isLight?"light":"dark"}`}>
      <Navbar/>
      <div className="b">
      <button onClick={()=>dispatch({type:"Icreament"})}>+</button>
                             {state}
      <button onClick={()=>dispatch({type:"Decreament"})}>-</button>
    </div>
    <div className="productdiv">
      {
        data.map((item)=>{
          return <div className="productitem" key={item.id}>
           <div>
           <img style={{height:"250px",width:"100%"}} src={item.imgu} alt="image"/>
           </div>
            <div>
            <p>{item.title}</p>
            <div>
            <p>{item.price}/-</p>
            </div>
            <div>
            <p>Rating: {item.rating}</p>
            </div>
           <div>
           <button>Add Cart</button>
           </div>
           
            
            </div>
          </div>
        })
      }
    </div>
    </div>
  )
}

export default App