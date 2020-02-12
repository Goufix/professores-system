import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Form } from "./Form";
import { useSheetDataContext } from "../../context/SheetDataContext";
import { useTabletop } from "../../hooks/useTableTop";
import { Loading } from "../../components/Loading";
import { getNicksFromMemberList } from "../../utils/memberListFilter";

interface Goal {
  name: string;
  points: number;
  type: "Great" | "Good" | "Warning" | "Free";
}

export function GoalMaker(_: RouteComponentProps) {
  const [formData, setFormData] = useState<string[]>([]);
  const [goal, setGoal] = useState<Goal[]>([]);
  const { sheetData } = useSheetDataContext();
  const [activeApplicators, inactiveApplicators] = formData;
  useTabletop(process.env.REACT_APP_SHEET_KEY!);

  if (sheetData.length === 0) {
    return <Loading />;
  }

  if (formData.length !== 0) {
    const applicators = [
      ...new Set(
        sheetData
          .map(data => data.NICK)
          .concat(getNicksFromMemberList(activeApplicators))
          .concat(getNicksFromMemberList(inactiveApplicators))
      )
    ];

    applicators.map(applicator => {
      const applicatorLessons = sheetData.filter(
        lesson => lesson.NICK === applicator
      );
      return applicatorLessons.forEach((value, _index, array) => {
        if (array.length === 0) {
          // Se o professor não tiver aplicado nenhuma aula e estiver de licença
          // Colocar ele na lista de professores em licença
          if (
            getNicksFromMemberList(inactiveApplicators).includes(applicator)
          ) {
            setGoal([
              ...goal,
              {
                name: applicator,
                points: applicatorLessons.length,
                type: "Free"
              }
            ]);
          }
          // Se o professor não tiver aplicado nenhuma aula e estiver ativo,
          // Colocar ele na lista de "EM AVISO"
          if (getNicksFromMemberList(activeApplicators).includes(applicator)) {
            setGoal([
              ...goal,
              {
                name: applicator,
                points: applicatorLessons.length,
                type: "Warning"
              }
            ]);
          }
        } else if (array.length > 14) {
          /// Se o professor tiver aplicado mais de 14 aulas,
          // colocar ele na lista de destaques.
          setGoal([
            ...goal,
            {
              name: applicator,
              points: applicatorLessons.length,
              type: "Great"
            }
          ]);
        } else {
          setGoal([
            ...goal,
            {
              name: applicator,
              points: applicatorLessons.length,
              type: "Good"
            }
          ]);
        }
      });
    });
  }

  return (
    <>
      <h1>
        {goal.map(value => `${value.name}: ${value.points} - ${value.type}`)}
      </h1>
      <Form onSubmit={data => setFormData(data)} />
    </>
  );
}
