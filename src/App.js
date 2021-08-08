import './App.css';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Home from './components/HomePage/Home';
<<<<<<< HEAD
import Navbar from './components/HomePage/Navbar/Navbar';
=======
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

>>>>>>> 27aef5da202a4d5421592f3a29feda1e5f7b63b9

function App() {
  return (
    
    <div className="App">
<<<<<<< HEAD
      <Navbar />
      <Home />
=======
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
>>>>>>> 27aef5da202a4d5421592f3a29feda1e5f7b63b9
    </div>
    
  );
}

export default App;
