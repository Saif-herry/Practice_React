import React from "react"

const Cart = ({crtdata,setCrtdata}) => {
    console.log(crtdata)

    return (
        <div>
            <div className="parent">
                
            
            {
             crtdata.map((item)=>{
                return<div className="child" key={item.id}>
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
             })   
            }
            </div>
        </div>
    )
}

export default Cart