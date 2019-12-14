import React from "react";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
import { Header } from "../../components/ApplicatorCard/styles";
import { RouteComponentProps } from "@reach/router";
import { FormControl } from "./styles";

export function GoalMaker(_: RouteComponentProps) {
  return (
    <Form>
      <Card
        style={{
          marginBottom: "5px",
          marginLeft: "5px",
          backgroundColor: "#413c69",
          color: "#fff"
        }}
      >
        <Row>
          <Col>
            <Form.Group controlId="members">
              <Header>
                <Form.Label>
                  <strong>Lista de professores ativos:</strong>
                </Form.Label>
              </Header>
              <FormControl as="textarea" rows={5} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="onleaveMembers">
              <Header>
                <Form.Label>
                  <strong>Lista de professores em licença:</strong>
                </Form.Label>
              </Header>
              <FormControl as="textarea" rows={5} />
            </Form.Group>
          </Col>
        </Row>
      </Card>
    </Form>
  );
}
