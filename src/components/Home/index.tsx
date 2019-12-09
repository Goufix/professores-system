import React from "react";
import { useTabletop } from "../../hooks/useTableTop";
import { Loading } from "../Loading";
import { SheetRow } from "../../@types/sheet";

const key: string = "1twPVj98sPGt9AeaDXsMqjc413yIgJ4RWaV_7O5RgpFg";

export function Home() {
  const sheetData: SheetRow[] = useTabletop(key);
  const applicator = [...new Set(sheetData.map(value => value.NICK))];

  if (sheetData.length === 0) {
    return <Loading />;
  }

  return (
    <>
      {applicator.map(applicator => {
        return sheetData
          .filter(value => value.NICK === applicator)
          .map(value => (
            <p>
              {applicator}: {value.ALUNO}
            </p>
          ));
      })}
    </>
  );
}
