import { useState } from 'react';
import './App.css';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';


function App() {
const [show,setShow] = useState(false)

const submitForm = () => {
  setShow(true)
}

  return (
    <div className="App">
      {/* <h1>Hello Masai</h1> */}
      {!show ? <SignUp submitForm={submitForm}/>:<Login/>}
    </div>
  );
}

export default App;
