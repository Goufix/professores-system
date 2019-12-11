import { useState, useEffect } from "react";
import tabletop from "tabletop";

export function useTabletop<T = any>(key: String) {
  const [sheetData, setSheetData] = useState<T[]>([]);

  useEffect(() => {
    tabletop.init({
      key,
      callback: (data: T[]) => {
        setSheetData(data);
      },
      simpleSheet: true
    });
  }, [key]);
  return sheetData;
}
