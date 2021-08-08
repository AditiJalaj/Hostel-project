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
import Context from '../src/context/context'

function App() {
  return (
    
    <div className="App">
    <Router>
    <Navbar/>
    <Context>
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/delhi' exact component={Delhi}/>
      <Route path='/kerala' exact component={Kerala}/>
      <Route path='/mumbai' exact component={Mumbai}/>
      <Route path='/rajasthan' exact component={Rajasthan}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/login" component={Login}/>
     
      </Switch>
      </Context>
      </Router>
    </div>
    
  );
}

export default App;
