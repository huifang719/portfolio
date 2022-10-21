import './main.css';
import MyNavbar from './components/inc/MyNavbar';
import MyFooter from './components/inc/MyFooter';
import Home from './components/Home';
import Projects from './components/projects';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/contact';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="header">
        <MyNavbar />
      </header>
      <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
