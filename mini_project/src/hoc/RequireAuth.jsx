import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const RequireAuth = ({children}) =>{

    const {isAuth} = useContext(AuthContext)

    if(isAuth){
        return children
    }
    else{
        return <Navigate to="/login"/>
    }

}

export default RequireAuth