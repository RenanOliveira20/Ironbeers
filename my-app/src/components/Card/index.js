import React, { Component } from 'react';
import { BiCart } from "react-icons/bi"
import './style.css'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }
    }
    render() {
        return (
            <div className='card-component'>
                <div className="card-image">
                    <img src={this.state.data.image} alt="beer image"/>
                </div>
                <div className = 'price-cart'>
                    <div>
                        <p>
                            {this.state.data.name} {this.state.data.liters} <br></br>
                            R$ {this.state.data.price}
                        </p>
                    </div>
                    <button><BiCart/></button>
                </div>

            </div>
        );
    }
}

export default Card;
