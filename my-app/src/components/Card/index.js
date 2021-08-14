import React, { Component } from 'react';
import { BiCart } from "react-icons/bi"
import './style.css'
import { Link } from 'react-router-dom';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }
    }
    render() {
        return (
            <Link to={`/single-beer/${this.state.data.id}`} className='card-component'>
                <div >
                    <div className="card-image">
                        <img src={this.state.data.image} alt="beer image" />
                    </div>
                    <div className='price-cart'>
                        <div>
                            <p>
                                {this.state.data.name} {this.state.data.liters} <br></br>
                                R$ {this.state.data.price}
                            </p>
                        </div>
                        <button><BiCart /></button>
                    </div>

                </div>
            </Link>
        );
    }
}

export default Card;
