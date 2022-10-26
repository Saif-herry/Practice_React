
import React from 'react'

const Cart = () => {

  let crtdata = JSON.parse(localStorage.getItem("cartdata"))
  console.log(crtdata)

  
  return (
    <div className='parent1'>
        
        {
                crtdata?.map((item)=>{
                    return <div className="child1" key={item.id}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpmagAEnb-i1KxV4FBuH_dDAtfwqY5JfH6Q&usqp=CAU" alt={item.image}/>
                                <p>{item.name}</p>
                                <p>Gender-{item.gender}</p>
                                <p>Department-{item.department}</p>
                                <p>Salery-{item.salary}</p>
                                <button>Add to Cart</button>
        
            </div>
                })
            }
    </div>
  )
}

export default Cart