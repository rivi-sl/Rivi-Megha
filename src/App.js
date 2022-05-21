import './App.scss';
import { RiviProvider } from './Rivi.Context'
import ProfileSideWindow from './Pages/SideWindows/Profile/ProfileSideWindow';
import PrivateSideWindow from './Pages/SideWindows/Private/PrivateSideWindow'
import PrivateChat from './Pages/MainWindows/Private/PrivateChat'
import {BrowserRouter as Router , Navigate, Route , Routes} from 'react-router-dom'
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';
import { AuthProvider } from './utilities/Auth.Context';
import Layout from './Layout/Layout';
import AuthLayout from './Layout/AuthLayout';

function App() {

  return (
    <RiviProvider>
      <AuthProvider>
      <Router>
      <div className="App">
            <Routes>
                <Route path={"/profile"} element={<Layout subWindow={<ProfileSideWindow />} mainWindow={null} />} />
                <Route path={"/private/*"} element={<Layout subWindow={<PrivateSideWindow />} mainWindow={<PrivateChat />} />} />
                <Route path = "/sign_in" element={<AuthLayout page={<SignIn/>} />} />
                <Route path = "/sign_up" element={<AuthLayout page={<SignUp/>} />} />
                <Route path = "*" element={<Navigate to="/sign_in"/>} />
            </Routes>
      </div>
  </Router> 
  </AuthProvider>
  </RiviProvider>
  );
} 

export default App;
