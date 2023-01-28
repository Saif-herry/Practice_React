import { useEffect, useState } from "react"


const useFetch = (url) =>{

    const [data,setData] = useState([])

    useEffect(() => {
       fetch(url).then((res)=>res.json()).then((d)=>setData(d))
    }, [url])
    console.log("data:",data)
return data
}

export default useFetch