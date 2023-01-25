import axios from "axios"
import React, { useEffect, useState } from "react"

const Form = () =>{
    const [data,setData] = useState("")

    let api ="http://localhost:8080/todos"

    const Fetch=()=>{
      axios.get(api).then((res)=>setData(res.data)).catch((err)=>console.log("err",err))
    }
    useEffect(()=>{
       Fetch() 
    })
    
    

    const handleSubmit = (e) =>{
      e.preventDefault()
       let  title = data
      let obj = {
           title
      }

      axios.post(api,obj).then((res)=>Fetch()).catch((err)=>console.log("err",err))
      console.log(data)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input Placeholder="Enter Name" onChange={(e)=>setData(e.target.value)} />
            <button>Submit</button>
        </form>
        </>
    )
}

export default Form