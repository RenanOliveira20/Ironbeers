import axios from "axios";
import React, { Component } from "react";
import { BiCart } from "react-icons/bi";
import "./style.css";

class SingleCard extends Component {
  state = {
    data: [],
  };
  componentDidMount = () => {
    axios.get("http://localhost:8000/beers").then((response) => {
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
        <div className="single-card">
          <div>
            <img src={this.state.data.image} alt={this.state.data.name} />
          </div>
          <div className="right">
            <h1>
              {this.state.data.name} {this.state.data.liters}{" "}
            </h1>
            <h2>R$ {this.state.data.price}</h2>
            <h3>Inventory: {this.state.data.quantity}</h3>
          </div>
        </div>

        <div className="footer-single-card">
          <div>
            Subtotal <br></br>
            <span>R$ 0</span>
          </div>
          <div>
            <span></span>Quantity <br></br>
            <span> 0 </span>
          </div>

          <button>
            Add to Cart <BiCart />
          </button>
        </div>
      </div>
    );
  }
}

export default SingleCard;
