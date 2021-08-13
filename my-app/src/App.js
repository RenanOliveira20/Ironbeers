import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ='/' component= {Home}/>
      </Switch>
    </div>
  );
}

export default App;
