import React, { Component } from 'react';
import { BiCart } from "react-icons/bi"
import {
    DrinkImg,
    CardComponent,
    CardLink,
    CardPrice,
    Price,
    CartButton
} from './card'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }
    }
    render() {
        return (
            <CardLink to={`/single-beer/${this.state.data.id}`} className='card-component'>
                <CardComponent>
                    <DrinkImg src = {this.state.data.image} alt = {this.state.data.name}/>
                    <CardPrice>
                            <Price>
                                {this.state.data.name} {this.state.data.liters} <br></br>
                                R$ {this.state.data.price}
                            </Price>
                        <CartButton><BiCart /></CartButton>
                    </CardPrice>
                </CardComponent>
            </CardLink>
        );
    }
}

export default Card;
