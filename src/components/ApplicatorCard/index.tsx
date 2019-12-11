import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import { SheetRow } from "../../@types/sheet";
import { Header } from "./styles";

interface Props {
  lessons: SheetRow[];
  applicator: String;
}

export function ApplicatorCard(props: Props) {
  const applicatorLessons = props.lessons.length;
  const applicatorCRO = props.lessons.filter(
    v => v.CURSO_APLICADO === "[CRO] Curso de Revisão Ortográfica"
  ).length;
  const applicatorCAG = props.lessons.filter(
    v => v.CURSO_APLICADO === "[CAG] Curso de Aperfeiçoamento Gramatical"
  ).length;

  const goal = 5;
  const achievedGoal = ((applicatorCAG + applicatorCRO) / goal) * 100;

  return (
    <Card
      style={{
        marginBottom: "5px",
        marginLeft: "5px",
        fontWeight: "bold"
      }}
      text="light"
    >
      <Header text="light" style={{ backgroundColor: "#4920a8" }}>
        {props.applicator}
      </Header>
      <ProgressBar
        animated
        variant="success"
        now={achievedGoal}
        style={{ backgroundColor: "#7b3ff2" }}
        label={achievedGoal + "%"}
      ></ProgressBar>
      <Card.Body style={{ backgroundColor: "#7b3ff2" }}>
        <div>Aulas aplicadas: {applicatorLessons}</div>
        <div>CRO: {applicatorCRO}</div>
        <div>CAG: {applicatorCAG}</div>
      </Card.Body>
    </Card>
  );
}
