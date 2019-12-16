import styled from "styled-components";
import { Card, Form } from "react-bootstrap";

export const Header = styled(Card.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
//    ${props => (props.esseNomeNaoPodeDarErroAssim ? "#28bd34" : "#bd2828")};

export const FormControl = styled(Form.Control)`
  outline: none;
  resize: none;
  border-radius: 5px;
  width: 100%;
  :focus {
    outline: none;
  }
`;
