  import axios from "axios";
import React, { Component } from "react";
import { BiCart } from "react-icons/bi";
import {
  Footer,
  LinkCart,
  Single,
  Rigth
} from './styles'


class SingleCard extends Component {
  state = {
    data: [],
  };
  componentDidMount = () => {
    axios.get("https://api-drinks20.herokuapp.com/products").then((response) => {
      const myDrink = response.data.filter((e) => {
        return e.id === Number(this.props.match.params.id);
      });
      this.setState({
        data: myDrink[0],
      });
    });
  };
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
            <h3>Inventory: {this.state.data.quantity}</h3>
          </Rigth>
        </Single>

        <Footer>
          <div>
            Subtotal <br></br>
            <span>R$ 0</span>
          </div>
          <div>
            Quantity<br></br>
            <input type = 'number' value='0'/>
          </div>
          <LinkCart to = '/cart'>
            Add to Cart <BiCart />
          </LinkCart>
        </Footer>
      </div>
    );
  }
}

export default SingleCard;
