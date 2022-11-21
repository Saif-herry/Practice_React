import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

const CartPage = () => {
    const {singleItem} = useContext(ProductContext)
    console.log(singleItem)
    return(
        <div>
            <h1>Cart Page</h1>
            <div className="crtpage">
                {
                    singleItem.map((item)=>{
                        return <div key={item.id} style={{border:"1px solid red"}}>
                            <div>
                            <img src={item.imgu} style={{height:"250px",width:"100%"}} alt="img"/>
                            </div>
                            <div>
                                  <p>{item.title}</p> 
                            </div>
                            <div>
                               <p>{item.price}</p> 
                            </div>
                            <div>
                               <p>{item.rating}</p> 
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default CartPage