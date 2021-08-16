import React, {Component} from 'react'
import {
    Div,
    Li,
    Img,
    Span,
    Trash,
    Input
  } from "./ListElements.js";
class List extends Component {

    render(){
    return (
        <>
        <Li>
        <Div>
            <Img src={this.props.data[0].image} alt= {this.props.data.name}/>
            <Span>{this.props.data[0].name}</Span>   
            <Span>R$ {this.props.data[0].price}</Span>
            <Span>{this.props.data[0].quantity}</Span>
            <Input/>            
        </Div>
        <Trash/>
        </Li>
        </>
    )
}
}

export default List
