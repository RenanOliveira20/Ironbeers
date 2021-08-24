import React from "react";
import api from "../../api/api";
import { BiCart } from "react-icons/bi";
import ListItem from "../ListCart/ListItem";
import {Footer, LinkCart} from "./CartElements"
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
        <Footer>
          <div>
            Subtotal <br></br>
            <span>R$ {''}</span>
          </div>
          <div>
            Quantity<br></br>
            <input type = 'number' value='0'/>
          </div>
          <LinkCart to = '/cart'>
          Purchase<BiCart />
          </LinkCart>
        </Footer>
      </div>
    );
  }
}
export default Cart;
