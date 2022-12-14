import React, { useState } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  const Login = () => {
    setIsAuth(true)
  }

  const Logout = () => {
    setIsAuth(false)
  }
  return (
    <AuthContext.Provider value={{ isAuth, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  )
}
