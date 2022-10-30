import React, { useContext } from "react"
import { CrtContext } from "../Context"

const SinglePage = ({item}) =>{
  
   const {crtdata,setCrtdata} = useContext(CrtContext)
    
    return(
        < >
           <div  className="child">
                    <img src={item.image} alt=""/>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <button onClick={()=>{
                        setCrtdata([...crtdata,item])
                    }}>Add to Cart</button>
                    <button onClick={()=>{
                        setCrtdata(crtdata.filter((c)=>c.id!==item.id))
                    }}>Remove From Cart</button>
                  </div>    
        </>
    )
}

export default SinglePage