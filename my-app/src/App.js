import React, {Component} from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
class App extends Component{
  
  render() {
  return (
    <div>
    <Navbar/>
      <Switch>
        <Route exact path ='/' component= {Home}/>
        <Route path = '/cart' component= {Cart}/>
      </Switch>
    </div>
  );
  }
}

export default App;
