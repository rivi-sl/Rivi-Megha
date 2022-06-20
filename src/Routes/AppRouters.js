import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import AuthLayout from '../Layout/AuthLayout'
import ProfileSideWindow from '../Pages/SideWindows/Profile/ProfileSideWindow'
import PrivateSideWindow from '../Pages/SideWindows/Private/PrivateSideWindow'
import PrivateChat from '../Pages/MainWindows/Private/PrivateChat'
import SignIn from '../Pages/Auth/SignIn'
import SignUp from '../Pages/Auth/SignUp'
import { useRivi } from '../Rivi.Context'
import SettingsSideWindow from '../Pages/SideWindows/Settings/SettingsSideWindow'

const AppRouters = () => {

    const {RiviToast} = useRivi()

  return (
    <>
    <RiviToast />
    <Routes>
        <Route path={"/profile"} element={<Layout subWindow={<ProfileSideWindow />} mainWindow={null} />} />
        <Route path={"/private/*"} element={<Layout subWindow={<PrivateSideWindow />} mainWindow={<PrivateChat />} />} />
        <Route path={"/settings"} element={<Layout subWindow={<SettingsSideWindow />} mainWindow={null} />} />
        <Route path = "/sign_in" element={<AuthLayout page={<SignIn/>} />} />
        <Route path = "/sign_up" element={<AuthLayout page={<SignUp/>} />} />
        <Route path = "*" element={<Navigate to="/sign_in"/>} />
    </Routes>
    </>
  )
}

export default AppRouters