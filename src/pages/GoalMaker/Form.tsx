import React, { useState } from "react";
import { Form as BsForm, Row, Col, Card, Button } from "react-bootstrap";
import { Header } from "../../components/ApplicatorCard/styles";
import { FormControl } from "./styles";

interface Props {
  onSubmit: (data: [string, string]) => void;
}

export function Form(props: Props) {
  const [activeApplicators, setActiveApplicators] = useState("");
  const [inactiveApplicators, setInactiveApplicators] = useState("");
  function handleSubmit() {
    props.onSubmit([activeApplicators, inactiveApplicators]);
  }

  return (
    <>
      <BsForm onSubmit={handleSubmit}>
        <Card
          style={{
            backgroundColor: "#413c69",
            color: "#fff"
          }}
        >
          <Row>
            <Col>
              <BsForm.Group controlId="members">
                <Header>
                  <BsForm.Label>
                    <strong>Lista de professores ativos:</strong>
                  </BsForm.Label>
                </Header>
                <FormControl
                  as="textarea"
                  rows={5}
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setActiveApplicators(event.currentTarget.value)
                  }
                  style={{ border: "3px solid #28bd34" }}
                />
              </BsForm.Group>
            </Col>
            <Col>
              <BsForm.Group controlId="onleaveMembers">
                <Header>
                  <BsForm.Label>
                    <strong>Lista de professores em licença:</strong>
                  </BsForm.Label>
                </Header>
                <FormControl
                  as="textarea"
                  rows={5}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setInactiveApplicators(e.currentTarget.value)
                  }
                  style={{ border: "3px solid #bd2828" }}
                />
              </BsForm.Group>
            </Col>
          </Row>
          <Button
            type="submit"
            variant="primary"
            style={{ backgroundColor: "#413c69" }}
          >
            Contar meta
          </Button>
        </Card>
      </BsForm>
    </>
  );
}
