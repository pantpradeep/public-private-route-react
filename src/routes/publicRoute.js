import { Component } from "react"
import { Route, Navigate } from "react-router-dom"
function PrivateRoutes({component:Component, isLogin,...rest}){
    return isLogin ? (
        <Component {...rest} />
      ) : (
        <Navigate to="/login" replace />
      );
}
export default PrivateRoutes;