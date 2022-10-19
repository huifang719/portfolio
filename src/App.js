import './main.css';
import MyNavbar from './components/inc/MyNavbar';
import MyFooter from './components/inc/MyFooter';
import Home from './components/pages/Home';
import Projects from './components/pages/projects';
function App() {
  return (
    <div className="App">
      <header className="header">
        <MyNavbar />
      </header>
      <main>
        {/* use react Router  */}
        <Projects />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
