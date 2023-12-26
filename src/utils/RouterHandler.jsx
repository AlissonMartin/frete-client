import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import mainApi from '../services/mainApi'

function PrivateRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  useEffect(()=> {
    const checkLogin = async()=> {
      const token = localStorage.getItem("token")
      // const isLogged = await mainApi.checkToken()
      // setIsLoggedIn(isLogged)
    }
    checkLogin()
  },[])

  return (
    isLoggedIn ? <Outlet/> : <Navigate to="/" />
  )
}

export default PrivateRoutes