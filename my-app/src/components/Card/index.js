import React, { Component } from 'react';
import { BiCart } from "react-icons/bi"
import { Link } from 'react-router-dom';
import {
    DrinkImg,
    CardComponent,
    CardLink,
    CardPrice,
    Price,
    CartButton
} from './card'
import api from '../../api/api';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }
        console.log(props.action)
    }
    handleToCart = () =>{
        let  { id }=this.state.data
        api.addBeerCart( id, 0)
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
                        <Link to ='/cart' ><CartButton onClick={this.handleToCart}><BiCart /></CartButton></Link>
                    </CardPrice>
                </CardComponent>
            </CardLink>
        );
    }
}

export default Card;
