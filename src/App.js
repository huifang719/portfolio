import './main.css';
import MyNavbar from './components/inc/MyNavbar';
import MyFooter from './components/inc/MyFooter';
import RouteAnimation from './components/RouteAnimation';


function App() {
  return (
    <div className="page-container">
      <div className='content-wrap'>
        <MyNavbar />
        <RouteAnimation />
      </div>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
