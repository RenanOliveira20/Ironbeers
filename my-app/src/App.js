import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SingleCard from './components/SingleCard';
import Nav from './components/Navbar/Navbar'
import React from 'react';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/single-beer/:id' component={SingleCard} />
        </Switch>
      </div>
    );
  }
}

export default App;
