import './App.scss';
import { RiviProvider } from './Rivi.Context'
import {BrowserRouter as Router , Navigate, Route , Routes} from 'react-router-dom'
import { AuthProvider } from './utilities/Auth.Context';
import AppRouters from './Routes/AppRouters';
import { ThemeProvider } from './utilities/Theme.Context';
import { LanguageProvider } from './utilities/Translate.Context';


function App() {

  return (
    <RiviProvider>
      <AuthProvider>
      <ThemeProvider>
      <LanguageProvider>
      <Router>
      <div className="App">
          <AppRouters />
      </div>
  </Router> 
  </LanguageProvider>
  </ThemeProvider>
  </AuthProvider>
  </RiviProvider>
  );
} 

export default App;
