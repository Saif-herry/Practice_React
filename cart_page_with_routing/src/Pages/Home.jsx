
import React from "react"

const Home = ({productItems,handleAddProduct}) =>{
    console.log(productItems)
    return (
        <div>
            <h1>Home</h1>
            <div className="parent">
                {
                 productItems.map((item)=>{
                    return <div key={item.id} className="child">
                        <img src={item.image} alt=""/>
                        <p>{item.name}</p>
                        <p>{item.department}</p>
                        <p>{item.gender}</p>
                        <p>{item.salary}</p>
                        <button onClick={()=>handleAddProduct(item)}>Add to Cart</button>
                    </div>
                 })   
                }
            </div>
        </div>
    )
}

export default Home