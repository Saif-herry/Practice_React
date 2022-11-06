import React, { useState } from "react";

const Home = () => {
const [frstnum,setFrstNum] = useState(0)
const [secondnum,setSecondNum] = useState(0)
const [adddata,setAdddata] = useState(0)

const handleChange = (e) => {
let val = Number(e.target.value);
console.log(val)
setFrstNum(val)
}

const handleChange1 = (e) => {
let val1 = Number(e.target.value);
setSecondNum(val1)
}

const handleClick = () => {
    setAdddata(frstnum+secondnum)
}
    return(
        <div>
            <h1>{adddata}</h1>
         <div className="formInput">
            <input type="number" placeholder="Enter First Name" onChange={handleChange}/>
            <input type="number" placeholder="Enter Second Number" onChange={handleChange1}/>
            <button onClick={handleClick}>Add</button>
         </div>   
        </div>
    )
}

export default Home;
