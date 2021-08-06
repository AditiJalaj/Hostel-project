import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/HomePage/Home';
import Navbar from './components/HomePage/Navbar';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
         <Home /> 
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
