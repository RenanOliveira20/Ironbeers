import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart/Cart";
import SingleCard from "./components/SingleCard";
import apiBeers from "./api/api";
import  Nav from './components/Navbar/Navbar';
import UserForm from "./components/UserForm/Index";

class App extends React.Component {
  state = {
    dados: [],
    erro: false,
    filtered: [],
    cartquantity: 0,
    haveFilter : false
  };

  async componentDidMount() {
    try {
      this.getCart()
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
    let filter = value.length > 0 ? true : false
    let copyArray = [...this.state.dados];
    copyArray = copyArray.filter((e) => {
      return e.name.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({
      haveFilter: filter,
      filtered: copyArray,
    });
  };

  getCart = async () => {
    try {
      const getCart = await apiBeers.getCart(0);
      this.setState({
        cartquantity: getCart.length,
      });
    } catch (e) {
      console.log(e);
    }
  };

  
  render() {
    return (
      <div>
       <Nav action= {this.handleOnSearch}  quantity={this.state.cartquantity}/>
        <Switch>
          <Route exact path="/"render={(props) => <Home {...props} search= {this.state.haveFilter}  data={this.state.filtered} getCart={this.getCart}  />}/>
          <Route
            path="/cart"
            render={(props) => <Cart {...props} getCart={this.getCart} quantity={this.state.cartquantity} />}
          />
          <Route path="/single-beer/:id" component={SingleCard} />
          <Route path="/singIn" component={UserForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
