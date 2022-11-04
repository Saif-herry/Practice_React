
import React from "react"
function handleChange(){
    
}
const Home = () => {
    return(
        <div>
            <div>
               
            </div>
          <input type="" placeholder="Enter Image url"/>
          <input type="number" placeholder="Enter First Number" onChange={()=>handleChange}/>
          <input type="number" placeholder="Enter Second Number"/>
          <button >Add</button>
        </div>
    )
}

export default Home