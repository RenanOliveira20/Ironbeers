import styled from "styled-components";
import { Link } from "react-router-dom";

export const DrinkImg = styled.img`
    margin-top:10px;
    height: 100%;
    width: auto;
    @media screen and (max-width: 375px){
        height: 50px;
        width: auto;
    }
`;
export const CardComponent = styled.div `
    background-color: black;
    width: 20%;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
   div {
        height: 50%
    }
    @media screen and (max-width: 375px){
        height: 130px;
        width: 20%;
    }
`;
export const  CardLink = styled(Link)`
    height: 85%;
    width: 100%;
    text-decoration:none;
    display: flex;
    flex-direction : column;
    justify-content : center;
    align-items: center
    `;

export const CardPrice = styled.div `
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 375px){
        display:flex;
        flex-direction: row
    }
`;
export const Price = styled.p `
text-align: center;
color: yellow;
font-size: 16px;
height: 50%;
@media screen and (max-width: 375px){
       font-size:10px ;
       width: 60px
    }
`;
export const CartButton = styled.button`
    width: 100%;
    background-color: gold;
    color: black;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    @media screen and (max-width: 375px){
        width: 100%;;
        height: 25px;
        border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    }
`