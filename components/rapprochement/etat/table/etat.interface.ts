export interface Column {
  id: "vide" | "vide1" | "debit" | "credit" | "debit1" | "credit1";
  label: string;
  minWidth?: number;
  align?: "center";
  format?: (value: number) => string;
}

export interface Data {
  vide: string;
  vide1: string;
  debit: string;
  credit: string;
  debit1: string;
  credit1: string;
}
