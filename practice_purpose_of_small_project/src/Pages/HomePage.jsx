import React, { useContext } from 'react'
import { ProductContext } from '../Context/ProductContext'
import { ThemeContext } from '../Context/ThemeContext'

const HomePage = () => {
    const {data,singleItem,setSingleItem} = useContext(ProductContext)
   const {isLight} = useContext(ThemeContext)


   const Handle = (e) => {
    setSingleItem([...singleItem,e])
    // console.log(singleItem)

 }
//  console.log(singleItem)
  return (
    <div>
        HomePage
        <div className="productdiv">
      {
        data.map((item)=>{
          return <div className="productitem" key={item.id}>
           <div>
           <img style={{height:"250px",width:"100%"}} src={item.imgu} alt="img"/>
           </div>
            <div>
            <p>{item.title}</p>
            <div>
            <p>{item.price}/-</p>
            </div>
            <div>
            <p>Rating: {item.rating}</p>
            </div>
           <div>
           <button onClick={()=>Handle(item)}>Add Cart</button>
           </div>
           
            
            </div>
          </div>
        })
      }
    </div>
    </div>
  )
}

export default HomePage