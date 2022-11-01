import './main.css';
import MyNavbar from './components/inc/MyNavbar';
import MyFooter from './components/inc/MyFooter';
import RouteAnimation from './components/RouteAnimation';


function App() {
  return (
    <div className="App">
      <header className="header">
        <MyNavbar />
      </header>
      <main>
        <RouteAnimation />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
