import {createContext, useEffect, useState } from "react";


export const ProductContext = createContext();

export const ProductProvider = ({children}) =>{
    const [data,setData] = useState([])
    const [singleItem,setSingleItem] = useState([])
    let arr = [];

    let api = "https://assosapi.herokuapp.com/mensData"
    useEffect(()=>{
        fetch(api).then((res)=>res.json()).then((data)=>setData(data))
    },[])
    // console.log(data)
    return(
        <ProductContext.Provider value={{data,setData,singleItem,setSingleItem,arr}}>
            {children}
        </ProductContext.Provider>
    )
}