import { useEffect, useState } from "react"


const useFetch1 = (url) => {

    const [data,setData] = useState([])

    useEffect(() => {
    fetch(url).then((res)=>res.json()).then((d)=>setData(d))
    }, [url])

    return data
}

export default useFetch1