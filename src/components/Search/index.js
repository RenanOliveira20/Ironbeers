import React from 'react';
import { BiCart } from 'react-icons/bi';
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
    render() {
        return (
            <div className= 'search-item'>
                <Item>
                <div>

                <BeverageImg src={this.props.data.image} />
                </div>
                <BeverageText>{this.props.data.name}</BeverageText>
                <BeverageText>R${this.props.data.price}</BeverageText>
                <div className ='quantity-cart-input' >
                    <BeverageQuant> {this.state.quantity} </BeverageQuant>
                    <div className ='buttons-up-down'>
                        <ButtonUp />
                        <ButtonDown />
                    </div>
                </div>
                <BeverageQuant>R$ {this.state.quantity * this.props.data.price} </BeverageQuant>
            </Item>
            <ButtonCart>
                Add to cart <BiCart/>
            </ButtonCart>
            </div>
            
        );
    }
}

export default SearchItem;
