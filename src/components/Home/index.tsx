import React from "react";
import { useTabletop } from "../../hooks/useTableTop";
import { Loading } from "../Loading";
import { SheetRow } from "../../@types/sheet";
import { ApplicatorCard } from "../ApplicatorCard";
import { Row, Col, Container } from "react-bootstrap";

const key: string = "1twPVj98sPGt9AeaDXsMqjc413yIgJ4RWaV_7O5RgpFg";

export function Home() {
  const sheetData: SheetRow[] = useTabletop(key).map(sheetRow => {
    const NICK = sheetRow.NICK.replace(`'=`, "=");
    return { ...sheetRow, NICK };
  });

  const applicator = [...new Set(sheetData.map(value => value.NICK))];

  if (sheetData.length === 0) {
    return <Loading />;
  }

  return (
    <Container>
      <Row>
        {applicator.map(applicator => {
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
    </Container>
  );
}
