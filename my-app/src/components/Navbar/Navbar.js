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

} from "./NavbarElements";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <Img to="/" src={logo} alt="logo"/>
        </NavLink>
        <NavMenu>
          <input type="search" placeholder="Search" aria-label="Search"/>
          <Button type="submit" >Search</Button>
        </NavMenu>
        <Link to="/cart">
        <Bars/> 
        </Link>       
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
