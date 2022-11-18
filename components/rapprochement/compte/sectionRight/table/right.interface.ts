export interface Column {
  id: "Date" | "Libelles" | "Debit" | "Credit" | "checking";
  label: string;
  minWidth?: number;
  align?: "center";
  format?: (value: number) => string;
}

export interface Data {
  Date: string;
  Libelles: string;
  Debit: string;
  Credit: string;
  checking: string;
}
