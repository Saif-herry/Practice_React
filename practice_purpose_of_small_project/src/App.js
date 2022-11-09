
import { useState } from 'react';
import './App.css';
import Signup from './Pages/Signup';


function App() {
  const [result,setResult] = useState("")

  const handleClick = (e) => {
        setResult(result.concat(e.target.value))
  }

  const handleClear = () => {
    setResult("")
  }

  const calculate = () => {
    setResult(eval(result).toString())
  }
  return (
    <div className="App">
     {/* <Signup/> */}
     <input type="text" placeholder='0' value={result} id="answer" className='button'/>
     <input type="button" value="9" className='button' onClick={handleClick}/>
     <input type="button" value="8" className='button' onClick={handleClick}/>
     <input type="button" value="7" className='button' onClick={handleClick}/>
     <input type="button" value="6" className='button' onClick={handleClick}/>
     <input type="button" value="5" className='button' onClick={handleClick}/>
     <input type="button" value="4" className='button' onClick={handleClick}/>
     <input type="button" value="3" className='button' onClick={handleClick}/>
     <input type="button" value="2" className='button' onClick={handleClick}/>
     <input type="button" value="1" className='button' onClick={handleClick}/>
     <input type="button" value="0" className='button' onClick={handleClick}/>
     <input type="button" value="+" className='button' onClick={handleClick}/>
     <input type="button" value="-" className='button' onClick={handleClick}/>
     <input type="button" value="*" className='button' onClick={handleClick}/>
     <input type="button" value="/" className='button' onClick={handleClick}/>
     <input type="button" value="%" className='button' onClick={handleClick}/>
     <input type="button" value="=" className='button button1' onClick={calculate}/>
     <input type="button" value="Clear" className='button button1' onClick={handleClear}/>

    </div>
  );
}

export default App;
