import { useState } from 'react';
import './App.css';
import Rivi from './Rivi.Context'
import Navigation from './Layout/Navigation'
import NavigationSubWindow from './Layout/NavigationSubWindows/NavigationSubWindow'
import PrivateSubWindow from './Pages/SubWindows/Private/PrivateSubWindow'
import MainWindow from './Layout/MainWindow'
import PrivateChat from './Pages/MainWindows/PrivateChat'
import riviUserData from  './userData'

function App() {
  const [state, setstate] = useState('PRIVATE')
  const [selectedPrivateChat,setSelectedPrivateChat] = useState(null)
  const [userData,setUserData] = useState(riviUserData)
  const [privateContactList ,setPrivateContactList] = useState([])

  const appProvider = { state, setstate, selectedPrivateChat, setSelectedPrivateChat, userData, setUserData,privateContactList ,setPrivateContactList}

  return (
    <div className="App">
      <Rivi.Provider value={appProvider}>
        <section className="Appbar">
          <Navigation />
          <NavigationSubWindow>
            <PrivateSubWindow />
          </NavigationSubWindow>
        </section>
        <section className="Appbody" onClick={()=>{console.log(selectedPrivateChat)}}>
          <MainWindow>
            {selectedPrivateChat!==null ? 
            <PrivateChat /> 
            :
            null}
          </MainWindow>
        </section>
        </Rivi.Provider>
    </div>
  );
} 

export default App;
