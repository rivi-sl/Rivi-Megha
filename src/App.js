import { useState } from 'react';
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

function App() {
  const [state, setstate] = useState('PROFILE')
  const [selectedPrivateChat,setSelectedPrivateChat] = useState(null)
  const [userData,setUserData] = useState(riviUserData)
  const [privateContactList ,setPrivateContactList] = useState([])
  // useEffect(() => {
  // },[])
  const appProvider = { state, setstate, selectedPrivateChat, setSelectedPrivateChat, userData, setUserData,privateContactList ,setPrivateContactList}
  return (
    <Router>
    <div className="App">
      <Rivi.Provider value={appProvider}>
        <section className="Appbar">
          <Navigation />
          <Tabs>
            <Routes>
              <Route path = "/profile" element={<ProfileSideWindow/>} />
              <Route path = "/private/*" element={<PrivateSideWindow/>} />
              <Route index element={<Navigate to="/profile"/>} />
            </Routes>
          </Tabs>
        </section>
        <section className="Appbody">
          <MainWindow>
            <Routes>
              <Route path = "/profile" element={null} /> {/*duplicate */}
              <Route path = "/private/*" 
               element={selectedPrivateChat!==null ?
              <PrivateChat /> 
              :
              null
              } />
              <Route index element={<Navigate to="/profile"/>} />
            </Routes>
          </MainWindow>
        </section>
        </Rivi.Provider>
      
    </div>
  </Router> 
  );
} 

export default App;
