import styled from "styled-components";
import { Link } from "react-router-dom";
import { FcMoneyTransfer } from "react-icons/fc";
import { MdAddShoppingCart } from "react-icons/md";

export const Footer = styled.div`
display: flex;
justify-content: space-evenly;
div {
    background-color: black;
    width: 20%;
    color: white;
    padding: 10px;
    border-radius:15px ;
    font-size:20px ;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    text-align: center;
    span {
    width:40%;
    background-color: white;
    color: black;
    width: auto;
    border-radius: 10px;
};
input{
    background-color: white;
    color: black;
    width: auto;
    border-radius: 10px;
    text-align: center;
};
}

`;
export const LinkCart = styled(Link)`
    font-size: 25px;
    width: 25%;
    padding: 10px;
    background-color: #256ce1;
    color: white;
    border-top-left-radius:15px ;
    border-end-end-radius: 15px;
    text-decoration: none;
    text-align: center;
    align-items: center;
    &:hover {
    transition: all 0.2s ease-in-out;
    background: black;
    color: white;
  }
`
;export const AddItem = styled(Link)`
font-size: 25px;
width: 20%;
padding: 10px;
background-color: black;
color: white;
border-top-left-radius:15px ;
border-end-end-radius: 15px;
text-decoration: none;
text-align: center;
align-items: center;
&:hover {
transition: all 0.2s ease-in-out;
background: #256ce1;
color: white;
}
`
;
export const MoneyTransfer = styled(FcMoneyTransfer)`
  color: #fff;
  width: 60px;
  height: 60px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    
  }
`;
export const AddShoppingCart = styled(MdAddShoppingCart)`
  color: #fff;
  width: 60px;
  height: 60px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    
  }
`;