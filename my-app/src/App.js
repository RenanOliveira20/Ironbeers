import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart/Cart";
import SingleCard from "./components/SingleCard";
import apiBeers from "./api/api";
import  Nav from './components/Navbar/Navbar';
import UserForm from "./UserForm/Index";
class App extends React.Component {
  state = {
    dados: [],
    erro: false,
    filtered: [],
  };

  async componentDidMount() {
    try {
      const beers = await apiBeers.getBeers();
      this.setState({
        dados: beers,
        filtered: beers,
      });
    } catch (e) {
      this.setState({
        erro: true,
      });
    }
  }

  handleOnSearch = (value) => {
    let copyArray = [...this.state.dados];
    copyArray = copyArray.filter((e) => {
      return e.name.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({
      filtered: copyArray,
    });
  };

  
  render() {
    return (
      <div>
       <Nav action= {this.handleOnSearch}/>
        <Switch>
          <Route exact path="/" render={(props)=> <Home {...props}  data={this.state.filtered}/>}/>
          <Route
            path="/cart"
            render={(props) => <Cart {...props} data={this.state.cart}  />}
          />
          <Route path="/single-beer/:id" component={SingleCard} />
          <Route path="/singIn" component={UserForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
