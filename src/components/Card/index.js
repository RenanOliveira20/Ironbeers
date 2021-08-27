import React, { Component } from "react";
import { BiCart } from "react-icons/bi";
import {
  DrinkImg,
  CardComponent,
  CardLink,
  CardPrice,
  Price,
  CartButton,
} from "./card";
import api from "../../api/api";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      subtotalArray: [],
    };
  }
  handleToCart = async () => {
    let { id, price } = this.state.data;
    await api.addBeerCart(id, 0, price);
    this.props.getCart();
  };
  render() {
    return (
      <CardComponent>
        <CardLink to={`/single-beer/${this.state.data.id}`}>
          <div>
            <DrinkImg src={this.state.data.image} alt={this.state.data.name} />
          </div>
          <CardPrice>
            <Price>
              {this.state.data.name} {this.state.data.liters} <br></br>
              R$ {this.state.data.price}
            </Price>
          </CardPrice>
        </CardLink>
        <CartButton onClick={this.handleToCart}>
          <BiCart />+
        </CartButton>
      </CardComponent>
    );
  }
}

export default Card;
