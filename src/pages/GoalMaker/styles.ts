import styled from "styled-components";
import { Card, Form } from "react-bootstrap";

export const Header = styled(Card.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormControl = styled(Form.Control)`
  margin: 0 5px;
  border: 3px solid #f444;
  outline: none;
  resize: none;
  border-radius: 5px;
  width: 100%;
  :focus {
    outline: none;
  }
`;
