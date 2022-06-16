import './App.scss';
import { RiviProvider } from './Rivi.Context'
import {BrowserRouter as Router , Navigate, Route , Routes} from 'react-router-dom'
import { AuthProvider } from './utilities/Auth.Context';
import AppRouters from './Routes/AppRouters';

function App() {

  return (
    <RiviProvider>
      <AuthProvider>
      <Router>
      <div className="App">
          <AppRouters />
      </div>
  </Router> 
  </AuthProvider>
  </RiviProvider>
  );
} 

export default App;
