// import logo from './logo.svg';
import './App.css';
import {useState} from "react"


function App() {
   const [btn1,setBtn1] = useState(false)
   const [btn2,setBtn2] = useState(false)
   const [btn3,setBtn3] = useState(false)
   const [val,setVal] = useState("")
   const [show,setShow] = useState(false)

  
   function handleClick(val){
  if(val === "btn1"){
    setBtn2(true)
    setBtn3(true)
    setVal(val)
    setShow(true)
  }
  else if(val==="btn2"){
    setBtn1(true)
    setBtn3(true)
    setVal(val)
    setShow(true)
  }
  else if(val==="btn3"){
    setBtn1(true)
    setBtn2(true)
    setVal(val)
    setShow(true)
  }
  else{
    setBtn1(false)
    setBtn2(false)
    setBtn3(false)
    setVal("")
    setShow(false)
  }
   }


  return (
    <div className="App">
      <h1>{val}</h1>
      <button onClick={()=>handleClick("btn1")}  disabled={btn1}>btn1</button>
      <button onClick={()=>handleClick("btn2")} disabled={btn2}>btn2</button>
      <button onClick={()=>handleClick("btn3")} disabled={btn3}>btn3</button>
      {show?<button onClick={()=>handleClick("reset")}>Reset</button>:null}
    </div>
  );
}

export default App;
