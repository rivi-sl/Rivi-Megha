import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../utilities/Auth.Context'
import Auth from './Auth/Auth'

const Layout = ({page}) => {
    const {currentUser} = useAuth()

    if (currentUser) {
        return <Navigate to="/profile" replace />;
      }
    

  return (
    <Auth>
        {page}
    </Auth>
  )
}

export default Layout