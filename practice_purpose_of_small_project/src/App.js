// import React from "react";
// import "./App.css"
// import Counter from "./Component/Counter";


// const App = () => {
//   return (
//     <div className="App">
//       <h1>App page</h1>
//       <Counter/>
//     </div>
//   )
// }

// export default App;


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