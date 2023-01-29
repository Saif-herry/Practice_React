
import React from "react"
import useFetch1 from "./custom_hook/useFetch1"

const Home1 = () => {

    const data = useFetch1('https://jsonplaceholder.typicode.com/todos')

    return(
        <>
         <div className="parent">
            {
                data && data.map((item)=>{
                    return <div key={item.id} className="child" >
                        <p>{item.title}</p>
                    </div>
                })
            }
         </div>
        </>
    )
}

export default Home1