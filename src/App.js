import './App.css';
import Navigation from './Layout/Navigation'
import NavigationSubWindow from './Layout/NavigationSubWindows/NavigationSubWindow'
import PrivateSubWindow from './Pages/SubWindows/PrivateSubWindow'
import MainWindow from './Layout/MainWindow'
import PrivateChat from './Pages/MainWindows/PrivateChat'

function App() {
  return (
    <div className="App">
        <section className="Appbar">
          <Navigation />
          <NavigationSubWindow>
            <PrivateSubWindow />
          </NavigationSubWindow>
        </section>
        <section className="Appbody">
          <MainWindow>
            <PrivateChat />
          </MainWindow>
        </section>
    </div>
  );
} 

export default App;
