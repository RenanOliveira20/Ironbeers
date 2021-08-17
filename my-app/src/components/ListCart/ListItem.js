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
            <Input type="number" min="0" value= {this.state.input}/>          
        </Div>
            <Trash />
          </Li>
        )}
      </>
    );
  }
}

export default List;
