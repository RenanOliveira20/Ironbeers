import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Img,
  Button,
  QuantityCart,
  CartLink,

} from "./NavbarElements";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'

class Navbar extends React.Component {
  state = {
    value:'',
  }
  handleSearch= async (event) => {
    await this.setState({
      value: event.target.value
    })  
    this.props.action(this.state.value)
  }

  render(){

    return (
      <>
      <Nav className= "fixed-top container-fluid">
        <NavLink to="/">
          <Img to="/" src={logo} alt="logo"/>
        </NavLink>
        <NavMenu>
          <input type="search" placeholder="Search" aria-label="Search" value ={this.state.value} onChange = {this.handleSearch} />
          <Button type="submit" >Search</Button>
        </NavMenu>
        <CartLink to="/cart">
        {  this.props.quantity > 0 ?
        <div className= 'navbar-cart-quntity'>
        <Bars/>
        <QuantityCart>  {this.props.quantity}</QuantityCart>
        </div> :
        <Bars/>
        }
        </CartLink>       
        <NavBtn>
          <NavBtnLink to="/singIn">Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}
};

export default Navbar;
