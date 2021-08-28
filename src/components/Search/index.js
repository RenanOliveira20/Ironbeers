import React from 'react';
import { BiCart } from 'react-icons/bi';
import api from '../../api/api';
import { ButtonCart } from '../SingleCard/styles';
import {
    Item,
    BeverageImg,
    BeverageText,
    BeverageQuant,
    ButtonDown,
    ButtonUp
} from './styles'

class SearchItem extends React.Component {
    state = {
        quantity: 1
    }
    handleUp = () =>{
        this.setState({
            quantity: this.state.quantity + 1
        })
        
    }
    handleDown = () =>{
        if(this.state.quantity > 1){
        this.setState({
            quantity: this.state.quantity - 1
        })
        }
    }
    addToCart =  async () =>{
        await api.addBeerCart(this.props.data.id, 0,this.state.quantity);
        this.props.get()
      }
    render() {
        return (
            <div className= 'search-item'>
                <Item>
                <div>

                <BeverageImg src={this.props.data.image} />
                </div>
                <BeverageText>{this.props.data.name}</BeverageText>
                <BeverageText>R${(this.props.data.price)}</BeverageText>
                <div className ='quantity-cart-input' >
                    <BeverageQuant> {this.state.quantity} </BeverageQuant>
                    <div className ='buttons-up-down'>
                        <ButtonUp onClick={this.handleUp} />
                        <ButtonDown onClick={this.handleDown} />
                    </div>
                </div>
                <BeverageQuant>R$ {(this.state.quantity * this.props.data.price).toFixed(2)} </BeverageQuant>
            </Item>
            <ButtonCart onClick = {this.addToCart}>
                Add to cart <BiCart/>
            </ButtonCart>
            </div>
            
        );
    }
}

export default SearchItem;
