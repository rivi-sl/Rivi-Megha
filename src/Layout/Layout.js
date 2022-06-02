import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../utilities/Auth.Context'
import MainWindow from './MainWindow/MainWindow'
import Navigation from './SideWindow/Navigation'
import Tabs from './SideWindow/Tabs'

const Layout = ({subWindow,mainWindow}) => {
    const {currentUser} = useAuth()

    if (!currentUser) {
        return <Navigate to="/sign_in" replace />;
      }
    

  return (
    <>
        <section className="Appbar">
            <Navigation />
            <Tabs>
                {subWindow}
            </Tabs>
        </section>
        <section className="Appbody">
            <MainWindow>
                {mainWindow}
            </MainWindow>
        </section>
    </>
  )
}

export default Layout