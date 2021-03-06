import { BiCart } from "react-icons/bi";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const Img = styled.img`
  height: 70px;
  display: flex;  
`;
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: #256ce1;
  padding: 3px 15px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 0px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const Bars = styled(BiCart)`
  color: #fff;
  width: 50px;
  height:auto;
  cursor: pointer;
  @media screen and (max-width: 768px) {
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #256ce1;
  }
`;

export const QuantityCart = styled.span`
text-align: center;
   cursor: pointer;
   color: white;
   font-size: 20px;
   padding: 5px 10px;
   height: 100px;
   background-color: red;
   border-radius:50%;
  @media screen and (max-width: 768px) {
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #256ce1;
  }
`;

export const CartLink = styled(Link)`
text-decoration: none;

`
;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
