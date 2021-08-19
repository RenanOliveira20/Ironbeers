import React from "react";
import api from "../../api/api";
import ListItem from "../ListCart/ListItem";
class Cart extends React.Component {
state ={
  cart: []
}

  componentDidMount = async() => {
    const getCart = await api.getCart(0);
    this.setState ({
      cart : getCart
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.cart.map((beer) => {
            return <ListItem key={beer.beerId} data={beer} />;
          })}
        </ul>
      </div>
    );
  }
}
export default Cart;
