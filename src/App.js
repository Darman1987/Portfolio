import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preload from './components/Preload';

function App() {
  return (
    <div className="App">
       <Preload/>
       <Nav/>
       <Home/>
       <About/>
       <Portfolio/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
