import { useEffect } from "react";
import tabletop from "tabletop";
import { useSheetDataContext } from "../context/SheetDataContext";
import { SheetRow } from "../@types/sheet";

export function useTabletop(key: String) {
  // const [sheetData, setSheetData] = useState<T[]>([]);
  const { sheetData, updateSheetData } = useSheetDataContext();

  function handleTabletopCallback(data: SheetRow[]) {
    const result: SheetRow[] = data.map(sheetRow => {
      const NICK = sheetRow.NICK.replace(`'=`, "=");
      return { ...sheetRow, NICK };
    });
    updateSheetData(result);
  }

  useEffect(() => {
    tabletop.init({
      key,
      callback: (data: SheetRow[]) => {
        if (sheetData.length === 0) {
          handleTabletopCallback(data);
        }
      },
      simpleSheet: true
    });
  });
}
