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
`;

export const Img = styled.img`
  width: auto;
  height: 100px;
`;

export const Span = styled.span`
 font-size: 25px;
`;

export const Trash = styled(FaTrash)`
  color: black;
  width: 100px;
  height: 100px;
  margin: 50px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    
  }
`;