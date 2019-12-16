import React, { useState } from "react";
import { Loading } from "../../components/Loading";
import { ApplicatorCard } from "../../components/ApplicatorCard";
import { Row, Col } from "react-bootstrap";
import { SearchBar } from "../../components/SearchBar";
import { RouteComponentProps } from "@reach/router";
import { useSheetDataContext } from "../../context/SheetDataContext";
import { useTabletop } from "../../hooks/useTableTop";

export function Home(_: RouteComponentProps) {
  const { sheetData } = useSheetDataContext();

  const [filterNick, setFilterNick] = useState("");

  const applicators = [...new Set(sheetData.map(value => value.NICK))];
  const filteredApplicators = applicators.filter(value =>
    value.includes(filterNick)
  );
  useTabletop(process.env.REACT_APP_SHEET_KEY!);

  if (sheetData.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <SearchBar handleChange={e => setFilterNick(e.currentTarget.value)} />
      <Row>
        {filteredApplicators.map(applicator => {
          return (
            <Col sm={6}>
              <ApplicatorCard
                lessons={sheetData.filter(lesson => lesson.NICK === applicator)}
                applicator={applicator}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
