import React, { useRef } from "react";
import "./App.css"
import Counter from "./Component/Counter";


const App = () => {

  const countRef = useRef(0)

  const handle = () =>{
    countRef.current++
    console.log(`Clicked ${countRef.current} times`)
  }

  console.log("I rendered!")


  return (
    <div className="App">
      <button onClick={handle}>Click me</button>
    </div>
  )
}

export default App;

/*
import React from 'react'
  
class App extends React.Component {
  
    constructor(props) {
        super(props);
         
        this.myRef = React.createRef();
      }
       
    handleClick = () => {
  
          
        this.myRef.current.value = "you clicked on button";
    }
    
    render() {
      return (
        <div>
        <input ref = {this.myRef}/>
          <button 
            onClick = {this.handleClick}
          > click me </button>
        </div>
      );
    }
  }
  
  export default App;

  */