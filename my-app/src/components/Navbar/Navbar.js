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
import logo from '../../images/logo.png'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <Img to="/" src={logo} alt="logo"/>
        </NavLink>
        <Bars />
        <NavMenu>
          <input type="search" placeholder="Search" aria-label="Search"/>
          <Button type="submit" >Search</Button>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
