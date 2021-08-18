import styled from "styled-components";
import { Link } from "react-router-dom";

export const DrinkImg = styled.img`
    margin-top:10px;
    height: 100px;
    width: auto;
    @media screen and (max-width: 375px){
        height: 50px;
        width: auto;
    }
`;
export const CardComponent = styled.div `
    background-color: black;
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    @media screen and (max-width: 375px){
        height: 100px;
        width: 120%;  
        margin-left:-10%
    }
`;
export const  CardLink = styled(Link)`
    width: 20%

`;
export const CardPrice = styled.div `
    height: 100px;
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
font-size: 20px;
@media screen and (max-width: 375px){
       font-size:10px ;
       width: 60px
    }
`;
export const CartButton = styled.button`
    width: 80px;
    background-color: gold;
    border-radius: 15px;
    @media screen and (max-width: 375px){
        width: 25px;
        height: 25px;
        border-radius: 10px;

    }
`