import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart/Cart';
import SingleCard from './components/SingleCard';
import axios from 'axios';

class App extends React.Component{
  
  state = {
    dados:[]
}
componentDidMount = async () =>
   await axios.get('http://localhost:8000/beers').then((response) => {
        this.setState({
            dados: response.data
        })
    })

  render() {
  return (
    <div>
      <Switch>
        <Route exact path ='/' component= {Home}/>
        <Route path = '/cart' render={(props) => (<Cart {...props} data = {this.state.dados}/>)} />
        <Route path='/single-beer/:id' component={SingleCard} />
      </Switch>
    </div>
  );
  }
}

export default App;
