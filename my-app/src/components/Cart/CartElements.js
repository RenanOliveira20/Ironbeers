import styled from "styled-components";
import { Link } from "react-router-dom";

export const Rigth = styled.div`
width: 90%;
    background-color: white;
    text-align: center;
    margin-right: 2%;
    border-radius: 15px;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content : space-around;
    h1 {
        font-size: 50px
    };
    h2 {
        font-size: 40px
    };
    h3 {
        font-size: 30px
    }
    @media screen and (max-width: 375px){
        h1 {
        font-size: 40px
    };
    h2 {
        font-size: 30px
    };
    h3 {
        font-size: 20px
    }
    }
`;
export const Footer = styled.div`
display: flex;
justify-content: space-evenly;
div {
    background-color: black;
    width: 25%;
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
    width: 30%;
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
    color: yellow;
  }
`
