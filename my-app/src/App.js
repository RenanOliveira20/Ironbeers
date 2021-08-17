import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart/Cart";
import SingleCard from "./components/SingleCard";
import apiBeers from "./api/api";
import  Nav from './components/Navbar/Navbar';

class App extends React.Component {
  state = {
    dados: [],
    cart: [],
    erro: false,
    filtered: [],
  };

  async componentDidMount() {
    try {
      const beers = await apiBeers.getBeers();
      const cart = await apiBeers.getCart(0);
      this.setState({
        dados: beers,
        cart: cart,
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

  addBeerCart = async (idBeer) => {
    try {
      const addBeer = await apiBeers.addBeerCart(idBeer, 0);
      this.setState({
        cart: addBeer,
      });
    } catch (e) {
      this.setState({
        erro: true,
      });
    }
  };

  render() {
    return (
      <div>
       <Nav action= {this.handleOnSearch}/>
        <Switch>
          <Route exact path="/" render={(props)=> <Home {...props} data={this.state.filtered}/>}/>
          <Route
            path="/cart"
            render={(props) => <Cart {...props} data={this.state.cart} />}
          />
          <Route path="/single-beer/:id" component={SingleCard} />
        </Switch>
      </div>
    );
  }
}

export default App;
