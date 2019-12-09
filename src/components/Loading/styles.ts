import { Alert } from "react-bootstrap";
import { RefreshCw } from "react-feather";
import styled, { keyframes } from "styled-components";

export const LoadingAlert = styled(Alert)`
  font-size: 20px;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const Spinner = styled(RefreshCw)`
  animation: ${spin} 2s linear infinite;
  margin-right: 1rem;
  margin-bottom: 0.25rem;
`;
