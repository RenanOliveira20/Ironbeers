import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import {AiOutlineCaretUp, AiOutlineCaretDown} from 'react-icons/ai'

export const Div = styled.div`
  background-color: black;
  height:150px;
  color: white;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  padding: 30px 15px;
  @media screen and (max-width: 768px) {
    margin: 0px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    padding: 5px 0px;
  }
`;

export const Li = styled.li`
  list-style: none;
  color: white;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  padding: 7px;
  margin-right: 0;
  @media screen and (max-width: 768px) {
    margin: 5px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    padding: 10px 0px;
  }
`;

export const Img = styled.img`
  width: auto;
  height:70px;
  margin-left: 30px;
  @media screen and (max-width: 768px) {
    width: auto;
    height: 50px;
    margin-left: 5px;
  }
`;

export const Span = styled.span`
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    justify-content: flex-start;
  }
`;

export const Trash = styled(FaTrash)`
  color: black;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  margin-right: 50px;
  @media screen and (max-width: 768px) {
    color: black;
    width: 50px;
    height: 50px;
    margin: 50px;
    cursor: pointer;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: red;
  }
`;

export const Quantity = styled.span`
text-align:center;
  background-color:white;
  color:black;
  width: 80px;
  height: 50px;
  margin-inline-end: 2%;
  cursor: pointer;
  font-size: 30px;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-left:50px;
  @media screen and (max-width: 768px) {
  width: 35px;
  height: 25px;
  margin-inline-end: 2%;
  cursor: pointer;
  font-size: 15px;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: yellow;
    color: black;
  }
`;
export const ButtonUp = styled(AiOutlineCaretUp)` 
margin-left: -70%;
width: 80px;
height:80px;
margin-bottom: -30%;
&:hover {
    transition: all 0.2s ease-in-out;
    color: yellow;
  }
`;
export const ButtonDown = styled(AiOutlineCaretDown)`
margin-left: -70%;
width: 80px;
height:80px;
&:hover {
    transition: all 0.2s ease-in-out;
    color: yellow;
  }
`