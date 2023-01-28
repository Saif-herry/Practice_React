import React from "react"
import useFetch from "./custom_hook/useFetch"

const Home = () => {

    const data = useFetch('https://jsonplaceholder.typicode.com/todos')
    console.log(data)
    return(
        <>
         <div>
            {
                data && data.map((item)=>{
                    return <div key="item.id">
                        {item.title}
                    </div>
                })
            }
         </div>
        </>
    )
}

export default Home