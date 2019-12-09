export type Fields =
  | "Carimbo de data/hora"
  | "NICK"
  | "CARGO"
  | "ALUNO"
  | "PATENTE_ALUNO"
  | "CURSO_APLICADO"
  | "RENDIMENTO"
  | "STATUS"
  | "DATA_HORA"
  | "LOCAL"
  | "OBS"
  | "REQ_SYSTEM";

export type SheetRow = {
  [key in Fields]: string;
};

//
