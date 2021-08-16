import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

export const Div = styled.div`
  background-color: black;
  color: white;
  margin: 30px;
  width: 80%;
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
  margin: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  padding: 30px 15px;
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
  height: 100px;
  margin-left: 30px;
  @media screen and (max-width: 768px) {
    width: auto;
    height: 90px;
    margin-left: 5px;
  }
`;

export const Span = styled.span`
  font-size: 25px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    justify-content: flex-start;
    
  }
`;

export const Trash = styled(FaTrash)`
  color: black;
  width: 100px;
  height: 100px;
  margin: 50px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
  color: black;
  width: 50px;
  height: 50px;
  margin: 50px;
  cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 60px;
  height: 60px;
  margin-inline-end: 2%;
  cursor: pointer;
  @media screen and (max-width: 768px) {
  width: 25px;
  height: 25px;
  margin-inline-end: 2%;
  cursor: pointer;
  }
`;
