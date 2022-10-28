import React from 'react'
import { FaFrown } from 'react-icons/fa';

const Cart = ({ crt, handleAddProduct, handleRemoveProduct }) => {
  const totalPrice = crt.reduce(
    (price, item) => price + item.quantity * item.salary,
    0,
  )
  return (
    <div className='parentcrt'>
      
    
    <div className='crtpage'>
      {/* <h1>Cart</h1> */}
      {/* <div> */}
      {crt.length === 0 && <div ><h3 >No Items are added  <FaFrown className='crttoops'/></h3></div>}

      
        {crt.map((item) => {
          return (
            <div key={item.id} className="child1">
                <div className='crtimg'>
              <img className='cartimg' src={item.image} alt="" />
              </div>
              <div className='crtprice'>
              <p>{item.name}</p>
              {/* <p>{item.department}</p> */}
              {/* <p>{item.gender}</p> */}
              <p>${item.salary}</p>
              </div>
              
              <div crtbtn>
              <button onClick={() => handleAddProduct(item)}>+</button>
              <button onClick={() => handleRemoveProduct(item)}>-</button>
              </div>
              <div crtslr>
                {item.quantity}*${item.salary}
              </div>
            </div>
          )
        })}
      {/* </div> */}
      </div>
      <div className='total'>
        <div className='t'>
        Total Price -
        </div>
        
        <div className='s'>${totalPrice}</div>
      </div>
    
    </div>
  )
}

export default Cart
