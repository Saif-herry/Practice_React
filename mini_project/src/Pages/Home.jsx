import React, { useEffect, useState } from "react"
import axios from "axios"
import Card from "../Component/Card";
import Cart from "./Cart";


function Home(){
const [data,setData] = useState([])
const [cart,setCart] = useState([])

let api = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees";

function Fetchdata(){
axios.get(api).then((res)=>setData(res.data.data)).catch((err)=>console.log(err))
}

// console.log(data)
useEffect(()=>{
    Fetchdata()
},[])


function handleClick(item){
    if(cart.indexOf(item)!==-1)return;
    setCart([...cart,item]);
    <Cart cart={cart}/>
    // console.log(card);
    
  }
console.log(cart)
    return(
        <div>
        <div className="parent">
            {
                data?.map((item)=>{
                    return <div>
                            <Card key={item.id} item={item} handleclick={handleClick} />           
                    </div>
                })
            }
        </div>
        </div>
    )
}

export default Home