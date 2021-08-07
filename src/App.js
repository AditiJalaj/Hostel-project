import './App.css';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Home from './components/HomePage/Home';
import Delhi from './components/Products/Delhi/Delhi';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Kerala from './components/Products/Kerala/Kerala';
import Mumbai from './components/Products/Mumbai/Mumbai';
import Rajasthan from './components/Products/Rajasthan/Rajasthan';
import Navbar from './components/HomePage/Navbar';


function App() {
  return (
    
    <div className="App">
    <Router>
    <Navbar/>
      <Switch>

      <Route path='/' exact component={Home}/>
      <Route path='/delhi' exact component={Delhi}/>
      <Route path='/kerala' exact component={Kerala}/>
      <Route path='/mumbai' exact component={Mumbai}/>
      <Route path='/rajasthan' exact component={Rajasthan}/>
      <Route exact path="/contact" component={Contact}/>
    <Route exact path="/login" component={Login}/>
     
      </Switch>
      </Router>
    </div>
    
  );
}

export default App;
