  import axios from "axios";
import React, { Component } from "react";
import { BiCart } from "react-icons/bi";
import api from "../../api/api";
import {
  Footer,
  ButtonCart,
  Single,
  Rigth
} from './styles'


class SingleCard extends Component {
  state = {
    data: [],
    quantity: 0
  };
  componentDidMount = () => {
    axios.get("https://api-drinks20.herokuapp.com/products").then((response) => {
      const myDrink = response.data.filter((e) => {
        return e.id === Number(this.props.match.params.id);
      });
      this.setState({
        data: myDrink[0],
        quantity:myDrink[0].quantity + 1
      });
      console.log(this.state)
    });
  };
  handleQuantity = (e) =>{
    if(e.target.value > 0 ){
    this.setState({
      quantity: e.target.value
    })}
  }
  addToCart =  async () =>{
    await api.addBeerCart(this.state.data.id, 0,this.state.quantity);
  }
  
  render() {
    return (
      <div>
        <Single>
          <div>
            <img src={this.state.data.image} alt={this.state.data.name} />
          </div>
          <Rigth>
            <h1>
              {this.state.data.name} {this.state.data.liters}{" "}
            </h1>
            <h2>R$ {this.state.data.price}</h2>
            <h3>Inventory: {this.state.data.inventory}</h3>
          </Rigth>
        </Single>

        <Footer>
          <div>
            Subtotal <br></br>
            <span>R$ {( this.state.data.price * this.state.quantity).toFixed(2)}</span>
          </div>
          <div>
            Quantity<br></br>
            <input type = 'number' value={this.state.quantity} onChange ={this.handleQuantity} />
          </div>
          <ButtonCart onClick={this.addToCart}>
            Add to Cart <BiCart />
          </ButtonCart>
        </Footer>
      </div>
    );
  }
}

export default SingleCard;
