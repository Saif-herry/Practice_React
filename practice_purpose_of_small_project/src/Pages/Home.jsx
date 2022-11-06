
import React from "react"
import { useState } from "react";

const Home = () => {
    const [data,setData] = useState(0)
    const [data1,setData1] = useState(0)
    const [adddata,setAdddata] = useState(0)
    // const [subsdata,setsubsdata] = useState(0)
    



    function handleChange(e){
        let val = Number(e.target.value);
        setData(val)
    }
    
    function handleChange1(e){
          let val1 = Number(e.target.value);
          setData1(val1)
    }
    const handleSubmit = () =>{ 
        // let data2= Number(data)
        // let data3 = Number(data1)
    setAdddata(data+data1)   
    }

    


    <div>
           
    </div>
    return(
        <div>
             <h1>{adddata}</h1>
            <div className="formdiv">
          {/* <input type="" placeholder="Enter Image url"/> */}
          <input type="number" placeholder="Enter First Number" onChange={handleChange}/>
          <input type="number"  placeholder="Enter Second Number" onChange={handleChange1}/>
          <div>
          <button onClick={handleSubmit}>Add</button>
          {/* <button onClick={handleSubmit1}>Substract</button> */}
          
          </div>
          </div>
        </div>
    )
}

export default Home