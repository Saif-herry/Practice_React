import { useState } from 'react';
import MainRoutes from './AllRoutes/MainRoutes';
import './App.css';
import Navbar from './Component/Navbar';

function App() {
  const [crtdata,setCrtdata] = useState([])
  return (
    <div className="App">
      <Navbar/>
    <MainRoutes crtdata={crtdata} setCrtdata={setCrtdata}/>
    </div>
  );
}

export default App;
