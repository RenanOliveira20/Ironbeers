import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SingleCard from './components/SingleCard';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ='/' component= {Home}/>
        <Route path= '/single-beer' component = {SingleCard} />
      </Switch>
    </div>
  );
}

export default App;
