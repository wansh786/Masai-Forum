import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({children}) => {
    const location=useLocation()
    const isAuth=useSelector(store=>store.authReducer.isAuth)
  return isAuth? children : <Navigate state={location.pathname} to={'/login'} replace={true}/>
}
