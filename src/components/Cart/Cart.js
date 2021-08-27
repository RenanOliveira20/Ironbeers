import React from "react";
import api from "../../api/api";
import ListItem from "../ListCart/ListItem";
import {Footer, LinkCart, MoneyTransfer, AddShoppingCart, AddItem} from "./CartElements"
class Cart extends React.Component {
  state = {
    cart: [],
    subtotal:[],
    total:0
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
    this.handleSubtotal()
  }
  componentDidMount = () => {
    this.getCart()
  }
  
  handleSubtotal = async  () =>{
    let prices = [0];
    if(this.state.cart.length > 0){
      this.state.cart.map((e)=>{
        return prices.push(e.price * e.quantity)
      })
    }
    this.setState({
      subtotal: prices
    })
    this.getResult()
  }
  getResult= ()=>{
    let subtotal = this.state.subtotal.reduce((pre, cur)=> pre + cur , 0).toFixed(2)
    console.log(subtotal)

    this.setState({
      total: subtotal
    })
    return subtotal
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
            <span>R$ {this.state.total}</span>
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
