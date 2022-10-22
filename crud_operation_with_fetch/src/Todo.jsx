import { useEffect, useState } from "react"



function Todo(){
     const [data,setData] = useState([])
     const [inputdata,setInputdata] = useState("")
     const [inputdata1,setInputdata1] = useState("")


     let api="http://localhost:8080/posts";


////////////////////////////Fetch function ///////////////////////////////
    function Fetchdata(){
            fetch(api).then((res)=>res.json()).then((d)=>{
                console.log(d)
                setData(d)
            })
    }

    useEffect(()=>{
        Fetchdata()
    },[])


////////////////////////////////INPUT FUNCTION FOR TITLE///////////////////    
    function handleInput(e){
   var val = e.target.value;
   setInputdata(val)
   
    }


 ///////////////////////////INPUT FUNCTION FOR AUTHOR//////////////////////   
    function handleInput1(e){
        var val1 = e.target.value
        setInputdata1(val1)
    }


//////////////////////////SUBMIT FUNCTION FOR BUTTON///////////////////////    
    function handleClick(){ 
        var author = inputdata;
        var title = inputdata1;
        var obj={
            author,
            title
        }
        
/////////////// DATA POST IN JSON-SERVER///////////////////////////////
        fetch(api,{
            method:"POST",
            body:JSON.stringify(obj),
            headers:{"content-type":"application/json"}
        }).then((res)=>res.json()).then((d)=>Fetchdata(d))
    }

    return(
        <div>

        <div className="inputdiv">
            <input placeholder="Enter title" onChange={handleInput}/>
            <input placeholder="Enter autho name" onChange={handleInput1}/>

            <button onClick={handleClick}>+</button>
        </div>
        
           <div className="parentdiv">
            {
                data.map((item)=>{
                    return <div key={item.id} className="childdiv">
                        <img src="data:image/jpeg;base64,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" alt=""/>
                        <p>{item.title}</p>
                        <p>{item.author}</p>
                        
                    </div>
                })
            }
           </div> 
        </div>
    )
}

export default Todo