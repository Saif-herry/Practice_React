import axios from "axios"
import React, { useState } from "react"
import { useEffect } from "react"
import "./Style/todo1.css"

const Todo1 = () =>{
    const [data,setData] = useState([])
    const [inputdata1,setInputdata1] = useState("")
    const [inputdata,setInputdata] = useState("")

    let api = "http://localhost:8080/todos"

    const Fetch = () =>{
      axios.get(api).then((res)=>setData(res.data)).catch((err)=>console.log('err',err))
    }
    
    useEffect(() => {
        Fetch()
    }, [])

    const handleClick=() =>{
        let title = inputdata;
        let author = inputdata1;
        let obj={
            title,
            author
        }
        axios.post(api,obj).then((res)=>Fetch()).catch((err)=>console.log("err",err))
    }
    console.log(data)

    const handleDelete =(id) =>{
       axios.delete(api +`/${id}`).then((res)=>Fetch()).catch((err)=>console.log('err',err))
    }
    /*
axios.delete(api+`/${id}`).then((res)=>Fetch()).catch((err)=>console.log("err",err))

fetch(api,{
    method:"POST",
    body:JSON.stringify,
    headers:{"content-type":"application-json"}
}).then((res)=>res.json()).then((d)=>Fetch(d))

fetch(api+`/${id}`,{
    method:"DELETE",
}).then((res)=>res.json()).then((d)=>Fetch(d))

fetch(api).then((res)=>res.json()).then((d)=>setData(d))
    */

    return(
        <>
        {/* INPUT DIV */}
        <div>
        <h1>Hello Todo1</h1> 
        </div>
        <div>
            <input placeholder="Enter Title" onChange={(e)=>setInputdata(e.target.value)}/>
            <input placeholder="Enter auther name" onChange={(e)=>setInputdata1(e.target.value)}/>
            <button onClick={handleClick}>+</button>
        </div>
          
          {/* DATA MAPPING */}
          <table className="parent">
               <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Avtar</th>
                <th>Delete</th>
               </tr>
            {
                data.map((item,index)=>{
                    return <tr key={index} className="child1">
                        <th><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlbxdiKTlBWwhGDX-GcYMHOgcR7e1JgRssgw&usqp=CAU" alt=""/></th>
                         <th><p>{item.title}</p></th>
                         <th><p>{item.author}</p></th>
                         <th><button onClick={()=>handleDelete(item.id)}>Delete</button></th>
                    </tr>
                })
            }
            
          </table>
        </>
    )
}

export default Todo1