import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import Login from '../Pages/Login'

const MainRoute = ({
  productItems,
  crt,
  handleAddProduct,
  handleRemoveProduct,

}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              productItems={productItems}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={
            <Cart
              crt={crt}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              
            />
          }
        />
      </Routes>
    </div>
  )
}

export default MainRoute
