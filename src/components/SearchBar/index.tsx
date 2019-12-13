import React from "react";
import { Form } from "react-bootstrap";

interface Props {
  handleChange: (e: any) => void;
}

export function SearchBar(props: Props) {
  return (
    <Form>
      <Form.Group controlId="search">
        <Form.Control
          autoComplete="off"
          onChange={props.handleChange}
          type="text"
          placeholder="Pesquisar professor"
        />
        <Form.Text className="text-muted">
          Escrava o nick do policial, a pesquisa é feita automáticamente.
        </Form.Text>
      </Form.Group>
    </Form>
  );
}
