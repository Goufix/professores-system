import React from "react";
import { Card } from "react-bootstrap";
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
  return (
    <Card style={{ marginBottom: "5px", marginLeft: "5px" }}>
      <Header>{props.applicator}</Header>
      <Card.Body>
        <div>Aulas aplicadas: {applicatorLessons}</div>
        <div>CRO: {applicatorCRO}</div>
        <div>CAG: {applicatorCAG}</div>
      </Card.Body>
    </Card>
  );
}
