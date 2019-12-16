import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Form } from "./Form";
import { useSheetDataContext } from "../../context/SheetDataContext";
import { useTabletop } from "../../hooks/useTableTop";
import { Loading } from "../../components/Loading";

export function GoalMaker(_: RouteComponentProps) {
  const [formData, setFormData] = useState<string[]>([]);
  const { sheetData } = useSheetDataContext();
  useTabletop(process.env.REACT_APP_SHEET_KEY!);

  if (sheetData.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <h1>{formData}</h1>
      <Form onSubmit={data => setFormData(data)} />
      <div>{sheetData.map(v => v.ALUNO)}</div>
    </>
  );
}
