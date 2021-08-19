import React from "react";
import ListItem from "../ListCart/ListItem";
import axios from "axios";

class Cart extends React.Component {
  state = {
    cart: []
  }
  componentDidMount = async () =>{
    const myCart = await axios.get('http://localhost:8000/users')
    this.setState({
      cart: myCart.data[0].cart
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
