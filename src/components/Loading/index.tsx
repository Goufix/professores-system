import React from "react";
import { AlertProps } from "react-bootstrap";
import { Spinner, LoadingAlert } from "./styles";

interface Props {
  variant?: AlertProps["variant"];
  message?: string;
}

export function Loading(props: Props) {
  return (
    <LoadingAlert variant={props.variant || "info"}>
      <Spinner />
      {props.message || "Carregando..."}
    </LoadingAlert>
  );
}
