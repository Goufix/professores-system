import styled from "styled-components";
import { Card, ListGroup, ProgressBar } from "react-bootstrap";

export const Header = styled(Card.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CustomListGroup = styled(ListGroup)`
  .list-group-item {
    background-color: #4a47a3;
  }
`;

export const CustomProgressBar = styled(ProgressBar)`
  .progress-bar {
    background-color: #d896ff;
    font-weight: bold;
  }
`;
