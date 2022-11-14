import React, { useRef } from "react";
import "./App.css"

const App = () =>{
  const countRef = useRef(0);

  const Handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`)
  };
   console.log("I rendered!")
    return (
      <div className="App">
        <button onClick={Handle}>Click Me!</button>
      </div>
    )
}


export default App;