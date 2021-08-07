
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch,Route,Link } from 'react-router-dom';

function App(){
  return(
    <Router>
      <div className="App">
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/About">ABOUT</Link>
          <Link to="/Contact">CONTACT</Link>
          <Link to="/login">LOGIN</Link>
        </nav>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            < Home/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;