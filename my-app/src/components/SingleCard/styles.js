import styled from "styled-components";
import { Link } from "react-router-dom";

export const Single = styled.div`
   width :90%;
   height: 600px;
    background-color: black;
    margin: 20px 5% 20px 5%;
    border-radius: 15px;
    display: flex;
    justify-content: space-around;
    padding: 20px 0 ;
    div {
        width: 50%;
        display: flex;
        justify-content: center;
        img {
            height:500px ;
        }
    }
    @media screen and (max-width: 375px){
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        height: 400px;
        div{
            width: 90%;
            height: 50%;
            margin-left: 5%;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
            img {
            height:200px ;
            margin-top: -20px;
        }

    }
}
`;
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
