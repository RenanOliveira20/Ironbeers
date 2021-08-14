import React, { Component } from 'react';
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
            <div >
                <div className="card-image">
                    <img src={this.state.data.image} alt="beer image" />
                </div>
                <div className = 'price-cart'>
                    <div>
                        <p>
                            {this.state.data.name} {this.state.data.liters} <br></br>
                            R$ {this.state.data.price}
                        </p>
                    </div>
                    <button>+</button>
                </div>

            </div>
        );
    }
}

export default Card;
