import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home/Home';
import Grammar from './component/Grammar/Grammar';
import Vocabulary from './component/Vocabulary';
import Exercises from './component/Exercises/Exercises';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/grammar' Component={Grammar} />
        <Route exact path='/vocabulary' Component={Vocabulary} />
        <Route exact path='/exercises' Component={Exercises} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
