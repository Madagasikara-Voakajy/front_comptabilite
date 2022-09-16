export interface Column {
  id: "ACTIF" | "Brut" | "Amort_prov" | "Net" | "Net1";
  label: string;
  minWidth?: number;
  align?: "center";
  format?: (value: number) => string;
}

export interface Data {
  ACTIF: string;
  Brut: string;
  Amort_prov: string;
  Net: string;
  Net1: string;
}
