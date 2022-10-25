import React, { createContext, useState } from 'react'


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  const login = () => {
    setIsAuth(true)
  }

  const logout = () => {
    setIsAuth(false)
  }
// let params = {isAuth: isAuth, login: login, logout: logout} is same-> values={{isAuth,login,logout}}
// if key and value is same then we don't need to pass value so we can write only params={isAuth,login,logout}  
return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}




