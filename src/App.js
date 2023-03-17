import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import ContactUs from './component/ContactUs';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/about' Component={About} />
        <Route exact path='/contactus' Component={ContactUs} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
