import React, { Component } from "react";
import { Div, Li, Img, Span, Trash, Input } from "./ListElements.js";
import apiBeers from "../../api/api";

class List extends Component {
  state = {
    beer: null,
    input: 0,
  };

  componentDidMount = async () => {
    try {
      const beer = await apiBeers.getOneBeer(this.props.data.beerId);
      this.setState({
          beer,
          input: this.props.data.quantity

      })
    } catch (e) {
        console.error(e)
    }
  };
  handleImput = (e) => {
    this.setState({
      input : e.target.value
    })
  }
  deleteItem = async () => {
    try {
      await apiBeers.deleteBeerCart(this.props.data.beerId, 0);
      this.props.action()
    } catch (error) {
      
    }

  }
  render() {
    return (
      <>
        {this.state.beer && (
          <Li>
            <Div>
            <Img src={this.state.beer.image} alt= {this.state.beer.name}/>
            <Span>{this.state.beer.name}</Span>   
            <Span>R$ {this.state.beer.price}</Span>
            <Span>{this.state.beer.quantity}</Span>
            <Input type="number" min="0" value= {this.state.input} onChange = { this.handleImput}/>          
        </Div>
            <Trash onClick ={this.deleteItem} />
          </Li>
        )}
      </>
    );
  }
}

export default List;
