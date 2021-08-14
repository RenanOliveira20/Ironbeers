import React, {Component} from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import axios from 'axios';
class App extends Component{
  
  state = {
    dados:[]
}
componentDidMount(){
    axios.get('http://localhost:8000/beers').then((response) => {
        this.setState({
            dados: response.data
        })
    })
}
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
