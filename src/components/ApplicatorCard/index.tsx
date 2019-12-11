import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { SheetRow } from "../../@types/sheet";
import { Header, CustomListGroup, CustomProgressBar } from "./styles";

interface Props {
  lessons: SheetRow[];
  applicator: String;
}

export function ApplicatorCard(props: Props) {
  const habboImage = `https://www.habbo.com.br/habbo-imaging/avatarimage?&user=${props.applicator}&action=std&direction=2&head_direction=4&img_format=png&gesture=std&headonly=1&size=b`;
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
        backgroundColor: "#413c69",
        color: "#fff"
      }}
    >
      <Header
        text="light"
        style={{ backgroundColor: "#413c69", fontWeight: "bold" }}
      >
        {props.applicator}
        <img src={habboImage} alt="" />
      </Header>
      <CustomProgressBar
        animated
        now={achievedGoal}
        style={{ backgroundColor: "#413c69" }}
        label={achievedGoal + "%"}
      ></CustomProgressBar>
      <CustomListGroup>
        <ListGroup.Item>
          <b>Curso de Rrevisão Ortográfica:</b> {applicatorCRO}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Curso de Aperfeiçoamento Gramatical:</b> {applicatorCAG}
        </ListGroup.Item>
        <ListGroup.Item>
          <b>Aulas aplicadas:</b> {applicatorLessons}
        </ListGroup.Item>
      </CustomListGroup>
    </Card>
  );
}
