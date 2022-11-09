import React, { useState } from "react";
import "./App.css"

const App = () =>{
const [result,setResult] = useState("")

const handleClick = (e) => {
  setResult(result.concat(e.target.value))
}

const clearfunction = () => {
  setResult("")
}

const calculate = () => {
  setResult(eval(result).toString())
}
  return(
    <div className="App">
      <h1>Hello</h1>
      <input type="text" value={result} placeholder="0"/>
      <input type="button" value="9" onClick={handleClick}/>
      <input type="button" value="8" onClick={handleClick}/>
      <input type="button" value="7" onClick={handleClick}/>
      <input type="button" value="6" onClick={handleClick}/>
      <input type="button" value="5" onClick={handleClick}/>
      <input type="button" value="4" onClick={handleClick}/>
      <input type="button" value="3" onClick={handleClick}/>
      <input type="button" value="2" onClick={handleClick}/>
      <input type="button" value="1" onClick={handleClick}/>
      <input type="button" value="0" onClick={handleClick}/>
      <input type="button" value="+" onClick={handleClick}/>
      <input type="button" value="-" onClick={handleClick}/>
      <input type="button" value="*" onClick={handleClick}/>
      <input type="button" value="/" onClick={handleClick}/>
      <input type="button" value="%" onClick={handleClick}/>
      <input type="button" value="Clear" onClick={clearfunction}/>
      <input type="button" value="=" onClick={calculate}/>
    </div>
  )
}


export default App