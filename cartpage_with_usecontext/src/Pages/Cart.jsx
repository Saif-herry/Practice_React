import React, { useContext, useEffect, useState } from 'react'
import { CrtContext } from '../Context'

const Cart = () => {
  const [total, setTotal] = useState()

  const { crtdata, setCrtdata } = useContext(CrtContext)

  useEffect(
    (item) => {
      setTotal(crtdata.reduce((acc, curr) => acc + Number(curr.price), 0))
    },
    [crtdata],
  )
  console.log(crtdata)

  return (
    <div>
      <span>Total:RS.{total}</span>
      <div className="parent">
        {crtdata.map((item) => {
          return (
            <div className="child" key={item.id}>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              {/* <button onClick={()=>{
                        setCrtdata([...crtdata,item])
                    }}>Add to Cart</button> */}
              <button
                onClick={() => {
                  setCrtdata(crtdata.filter((c) => c.id !== item.id))
                }}
              >
                Remove From Cart
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cart
