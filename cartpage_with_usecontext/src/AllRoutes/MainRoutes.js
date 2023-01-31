import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default MainRoutes
