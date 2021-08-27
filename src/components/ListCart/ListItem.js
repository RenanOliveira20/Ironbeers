import React, { Component } from "react";
import { Div, Li, Img, Span, Trash, Quantity, ButtonUp, ButtonDown } from "./ListElements.js";
import apiBeers from "../../api/api";

class List extends Component {
  state = {
    beer: null,
    input: 0,
  };

  componentDidMount = () => {
    this.getABeverage()
  };
  componentDidUpdate = (prevProps) => {
    if (prevProps.data !== this.props.data) {
      this.getABeverage();

    }
  }
  getABeverage = async () => {
    try {
      const beer = await apiBeers.getOneBeer(this.props.data.beerId);
      this.setState({
        beer,
        input: this.props.data.quantity
      })
    } catch (e) {
      console.error(e)
    }
  }
  handleUp = async () => {
    this.setState({
      input: this.state.input + 1
    })
    await apiBeers.handleQuantityUp(this.props.data.beerId,0)
    this.props.action()
  }
  handleDown = async () =>{
    this.setState({
      input: this.state.input - 1
    })
    await apiBeers.handleQuantityDown(this.props.data.beerId, 0)
  }
  deleteItem = async () => {
    try {
      await apiBeers.deleteBeerCart(this.props.data.beerId, 0);
      this.props.action();
    } catch (error) {

    }

  }
  render() {
    return (
      <>
        {this.state.beer && (
          <Li>
            <Div>
              <Img src={this.state.beer.image} alt={this.state.beer.name} />
              <Span>{this.state.beer.name}</Span>
              <Span>R$ {(this.state.beer.price * this.state.input).toFixed(2)}</Span>
              <Span>{this.state.beer.inventory}</Span>
              <Quantity>{this.state.input} </Quantity>
              <div className='quantity-cart-input'>
                <div className='buttons-up-down'>
                  <ButtonUp onClick={this.handleUp}/>
                  <ButtonDown on onClick={this.handleDown} />
                </div>
              </div>
            </Div>
            <Trash onClick={this.deleteItem} />
          </Li>
        )}
      </>
    );
  }
}

export default List;
