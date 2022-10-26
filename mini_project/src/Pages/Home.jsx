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

// cart =JSON.parse(localStorage.getItem("cartdata"))

function handleClick(item){
    if(cart.indexOf(item)!==-1)return;
    setCart([...cart,item]);
    localStorage.setItem("cartdata",JSON.stringify(cart)) 
  }
console.log(cart)
    return(
        <div>
        <div className="parent">
            {
                data?.map((item)=>{
                    return <div className="child" key={item.id}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpmagAEnb-i1KxV4FBuH_dDAtfwqY5JfH6Q&usqp=CAU" alt={item.image}/>
                                <p>{item.name}</p>
                                <p>Gender-{item.gender}</p>
                                <p>Department-{item.department}</p>
                                <p>Salery-{item.salary}</p>
                                <button onClick={()=>handleClick(item)}>Add to Cart</button>
        
            </div>
                })
            }
        </div>
        </div>
    )
}

export default Home