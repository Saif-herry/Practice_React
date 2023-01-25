import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios"



function Todo(){
    const [data,setData] = useState([])
    const [inputdata,setInputdata] = useState("")
    const [inputdata1,setInputdata1] = useState("")


    let api = "http://localhost:8080/todos"

////////////////////////////////// GET DATA FROM API///////////////////////////////
    function Fetchdata(){
     axios.get(api).then((res)=>setData(res.data)).catch((err)=>console.log("error:",err))
    }
    // console.log(data)

    useEffect(()=>{
        Fetchdata()
    },[])


////////////////////// FUNCTION FOR TITLE INPUT DATA////////////////////
    // function handleInput(e){
    //  var val = e.target.value;
    //  setInputdata(val)
    // }


///////////////////////////FUNCTION FOR AUTHOR INPUT DATA//////////////////    
    // function handleInput1(e){
    // var val1 = e.target.value;
    // setInputdata1(val1)
    // }
 

 /////////////////////FUNCTION FOR POST DATA USING AXIOS INSIDE BUTTON////////////////////   
    function handleClick(e){
        e.preventDefault()
        var title = inputdata
        var author = inputdata1
        var obj = {
            title,
            author
        }
        console.log(obj)
        axios.post(api,obj).then(()=>Fetchdata()).catch((err)=>console.log("err",err))
    }

////////////////////DELETE FUNCTION WITH AXIOS/////////////////////////
function handleDelete(id){
  console.log(id)
  axios.delete(api+`/${id}`)
  .then((res)=>Fetchdata())
  .catch((err)=>console.log("err:",err))
}


    return(
        <div>

            <div className="inputdiv">
                <form onSubmit={handleClick}>
                <div>
                <h3>Enter Title and Author</h3>
                </div>
                <div>
                <input placeholder="Enter Title" onChange={(e)=>setInputdata(e.target.value)}/>
                <input placeholder = "Enter Author Name" onChange={(e)=>setInputdata1(e.target.value)}/>
                <button>+</button>
                </div>
                </form>
            </div>
{/* ///////////////////////////DATA MAPING///////////////////////////////////             */}
            <div className="parentdiv">
                {
                    data.map((item)=>{
                        return <div key={item.id} className="childdiv">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlbxdiKTlBWwhGDX-GcYMHOgcR7e1JgRssgw&usqp=CAU" alt=""/>
                            <p>{item.title}</p>
                            <p>{item.author}</p>
                            <button onClick={()=>handleDelete(item.id)}>DELETE</button>
                        </div>
                    })
                }
            </div> 
        </div>
    )
}

export default Todo;