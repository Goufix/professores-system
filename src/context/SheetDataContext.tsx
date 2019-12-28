import React, { createContext, useState, useContext } from "react";
import { SheetRow } from "../@types/sheet";

interface SheetDataContextInterface {
  sheetData: SheetRow[];
  updateSheetData: (data: SheetRow[]) => void;
}

export const SheetDataContext = createContext<SheetDataContextInterface>({
  sheetData: [],
  updateSheetData: () => {
    throw new Error("Not implemented.");
  }
});

interface Props {
  children: React.ReactNode;
}

export function SheetDataContextProvider(props: Props) {
  const [sheetData, updateSheetData] = useState<SheetRow[]>([]);

  return (
    <SheetDataContext.Provider
      value={{
        sheetData,
        updateSheetData: data => updateSheetData(data)
      }}
    >
      {props.children}
    </SheetDataContext.Provider>
  );
}

export function useSheetDataContext() {
  const context = useContext(SheetDataContext);

  if (typeof context === "undefined") {
    throw new Error("You must use `useSheetDataContext` within an `SheetDataContextProvider`.");
  }

  return context;
}
