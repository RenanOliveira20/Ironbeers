import React from "react";
import api from "../../api/api";
import ListItem from "../ListCart/ListItem";
class Cart extends React.Component {
  state = {
    cart: []
  }
  getCart = async () => {
    try {

      const getCart = await api.getCart(0);
      this.setState({
        cart: getCart
      })
    } catch (e) {
      console.log(e)
    }
  }
  componentDidMount = () => {
    this.getCart()
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.cart.map((beer, i) => {
            return <ListItem key={i} data={beer} index={i} action = {this.getCart} />;
          })}
        </ul>
      </div>
    );
  }
}
export default Cart;
