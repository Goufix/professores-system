import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Form } from "./Form";
import { useSheetDataContext } from "../../context/SheetDataContext";
import { useTabletop } from "../../hooks/useTableTop";
import { Loading } from "../../components/Loading";
import { getNicksFromMemberList } from "../../utils/memberListFilter";

export function GoalMaker(_: RouteComponentProps) {
  const [formData, setFormData] = useState<string[]>([]);
  const { sheetData } = useSheetDataContext();
  useTabletop(process.env.REACT_APP_SHEET_KEY!);

  if (sheetData.length === 0) {
    return <Loading />;
  }

  if (formData.length !== 0) {
    let goal = [];
    const applicators = [
      ...new Set(
        sheetData
          .map(data => data.NICK)
          .concat(getNicksFromMemberList(formData[0]))
          .concat(getNicksFromMemberList(formData[1]))
      )
    ];
    applicators.map(applicator => {
      return sheetData
        .filter(lesson => lesson.NICK === applicator)

        .map((value, _index, array) => {
          if (array.length === 0) {
            if (getNicksFromMemberList(formData[1]).includes(applicator)) {
              goal.push(`${applicator} - [b][color=#ccc]02 aulas aplicadas[/color] {Licença} [/b]`);
            }
            if (getNicksFromMemberList(formData[0]).includes(applicator)) {
            }
          }
          return value;
        });
    });
  }

  return (
    <>
      <h1>{formData}</h1>
      <Form onSubmit={data => setFormData(data)} />
    </>
  );
}
