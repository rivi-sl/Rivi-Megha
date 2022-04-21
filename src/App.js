import { useEffect, useState } from 'react';
import './App.css';
import Rivi from './Rivi.Context'
import Navigation from './Layout/Navigation'
import NavigationSubWindow from './Layout/NavigationSubWindows/NavigationSubWindow'
import ProfileSubWindow from './Pages/SubWindows/Profile/ProfileSubWindow';
import PrivateSubWindow from './Pages/SubWindows/Private/PrivateSubWindow'
import MainWindow from './Layout/MainWindow'
import PrivateChat from './Pages/MainWindows/PrivateChat'
import riviUserData from  './userData'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'

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
          <NavigationSubWindow>
            <Routes>
              <Route path = "/profile" element={<ProfileSubWindow/>} />
              <Route path = "/private" element={<PrivateSubWindow/>} />
            </Routes>
          </NavigationSubWindow>
        </section>
        <section className="Appbody">
          <MainWindow>
            {selectedPrivateChat!==null ?
            <PrivateChat /> 
            :
            null
           }
          </MainWindow>
        </section>
        </Rivi.Provider>
    </div>
    </Router>
  );
} 

export default App;
