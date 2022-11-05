import { useState } from 'react';
import './App.css';
import SignUp from './Pages/SignUp';
import SignupFormSuccesss from './Pages/SignupFormSuccess';


function App() {
const [show,setShow] = useState(false)

const submitForm = () => {
  setShow(true)
}

  return (
    <div className="App">
      <h1>Hello Masai</h1>
      {!show ? <SignUp submitForm={submitForm}/>:<SignupFormSuccesss/>}
    </div>
  );
}

export default App;
