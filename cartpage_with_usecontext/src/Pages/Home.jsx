import React from "react"
import { faker } from "@faker-js/faker"
import SinglePage from "./SinglePage"



const Home = ({crtdata,setCrtdata}) => {
    faker.seed(123);


  const productArray = [...Array(20)].map(()=>({
    id:faker.datatype.uuid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price(),
    image:faker.image.image(),
  }))
//   console.log(productArray)
//   console.log(crtdata)
    return(
        <div>
         <div className="parent">
            {
             productArray.map((item)=>{
                  return <SinglePage key={item.id} item={item} crtdata={crtdata} setCrtdata={setCrtdata}/>
             })   
            }
         </div>
        </div>
    )
}

export default Home