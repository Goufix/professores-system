import React, { useState } from "react";
import { useTabletop } from "../../hooks/useTableTop";
import { Loading } from "../Loading";
import { SheetRow } from "../../@types/sheet";
import { ApplicatorCard } from "../ApplicatorCard";
import { Row, Col } from "react-bootstrap";
import { SearchBar } from "../SearchBar";

const key: string = "1twPVj98sPGt9AeaDXsMqjc413yIgJ4RWaV_7O5RgpFg";

export function Home() {
  const sheetData: SheetRow[] = useTabletop(key).map(sheetRow => {
    const NICK = sheetRow.NICK.replace(`'=`, "=");
    return { ...sheetRow, NICK };
  });

  const [filterNick, setFilterNick] = useState("");

  const applicators = [...new Set(sheetData.map(value => value.NICK))];
  const filteredApplicators = applicators.filter(value =>
    value.includes(filterNick)
  );

  if (sheetData.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <SearchBar handleChange={e => setFilterNick(e.target.value)} />
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
