import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'

export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem('loggedin')

  if (!isLoggedIn) {
    return <Navigate to='/login?message=You must log in first' />
  }

  return <Outlet />
}
