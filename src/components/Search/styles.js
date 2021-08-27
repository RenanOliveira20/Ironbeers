import styled from "styled-components";
import {AiOutlineCaretUp, AiOutlineCaretDown} from 'react-icons/ai'

export const Item = styled.li `
width: 80%;
background-color:black;
height:100px;
list-style:none;
margin-top : 10px;
border-radius:15px;
display:flex;
justify-content: space-around;
align-items: center;
div{
    justify-content:space-around;
    width:20%;
    span{
        width:50%;
        
    }
}
`;
export const BeverageImg = styled.img ` 
height: 70px;
width: auto;
display:flex;
justify-content: center;
align-items: center;
`;
export const BeverageText = styled.p ` 
    color: white;
    width: 20%
`;
export const BeverageQuant = styled.span ` 
    background-color: white;
    width: 10%;
    height: 70px;
    display:flex;
justify-content: space-around;
align-items: center;
border-radius: 15px
`;
export const ButtonUp = styled(AiOutlineCaretUp)` 
width: 60px;
height:60px;
margin-bottom: -30%;
&:hover {
    transition: all 0.2s ease-in-out;
    color: yellow;
  }
`;
export const ButtonDown = styled(AiOutlineCaretDown)`
width: 60px;
height:60px;
&:hover {
    transition: all 0.2s ease-in-out;
    color: yellow;
  }
`
