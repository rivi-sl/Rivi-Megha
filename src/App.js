import { useState ,useContext} from 'react';
import './App.scss';
import Rivi from './Rivi.Context'
import Navigation from './Layout/SideWindow/Navigation'
import Tabs from './Layout/SideWindow/Tabs'
import ProfileSideWindow from './Pages/SideWindows/Profile/ProfileSideWindow';
import PrivateSideWindow from './Pages/SideWindows/Private/PrivateSideWindow'
import MainWindow from './Layout/MainWindow/MainWindow'
import PrivateChat from './Pages/MainWindows/Private/PrivateChat'
import riviUserData from  './userData'
import {BrowserRouter as Router , Navigate, Route , Routes} from 'react-router-dom'
import Auth from './Layout/Auth/Auth';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';

function App() {
  const [state, setstate] = useState('PROFILE')
  const [selectedPrivateChat,setSelectedPrivateChat] = useState(null)
  const [userData,setUserData] = useState(riviUserData)
  const [privateContactList ,setPrivateContactList] = useState()
  const [islogged, setislogged] = useState()

 
  // useEffect(() => {
  // },[])
  const appProvider = { state, setstate, selectedPrivateChat, setSelectedPrivateChat, userData, setUserData,privateContactList ,setPrivateContactList,islogged,setislogged}
  return (
    <Router>
    <div className="App">
      {islogged?
      <Rivi.Provider value={appProvider}>
        
          <section className="Appbar">
            <Navigation />
            <Tabs>
              <Routes>
                <Route path = "/profile" element={<ProfileSideWindow/>} />
                <Route path = "/private/*" element={<PrivateSideWindow/>} />
                <Route path='*' element={<Navigate to="/profile"/>} />
              </Routes>
            </Tabs>
          </section>
          <section className="Appbody">
            <MainWindow>
              <Routes>
                <Route path = "/profile" element={null} /> 
                <Route path = "/private/*" 
                element={selectedPrivateChat!==null ?
                <PrivateChat /> 
                :
                null
                } />
                <Route path='*' element={<Navigate to="/profile"/>} />
              </Routes>
            </MainWindow>
          </section>
        
        </Rivi.Provider>
        :
        <Rivi.Provider value={appProvider}>
          <Auth>
            <Routes> 
              <Route path = "/sign_in" element={<SignIn/>} />
              <Route path = "/sign_up" element={<SignUp/>} />
              <Route path = "*" element={<Navigate to="/sign_in"/>} />

            </Routes>
          </Auth>
        </Rivi.Provider>
      }
    </div>
  </Router> 
  );
} 

export default App;
