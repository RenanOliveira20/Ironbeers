import React from "react";
import api from "../../api/api";
import ListItem from "../ListCart/ListItem";
import {Footer, LinkCart, MoneyTransfer, AddShoppingCart, AddItem} from "./CartElements"
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
            return <ListItem key={i} data={beer}  action = {this.getCart} />;
          })}
        </ul>
        <Footer>
          <div>
            Subtotal <br></br>
            <span>R$ {''}</span>
          </div>
          <div>
          quantity of products<br></br>
            <input type = 'number' value='0'/>
          </div>
          <AddItem to = '/'>
        add more items<AddShoppingCart/>
        </AddItem>
          <LinkCart to = '/cart'>
          Close the account and pay <MoneyTransfer/>
          </LinkCart>
        </Footer>
      </div>
    );
  }
}
export default Cart;
