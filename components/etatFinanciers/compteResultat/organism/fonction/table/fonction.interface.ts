export interface Column {
  id: "capitaux_prop_passif" | "solde_n" | "solde_n_1";
  label: string;
  minWidth?: number;
  align?: "center";
  format?: (value: number) => string;
}

export interface Data {
  capitaux_prop_passif: string;
  solde_n: string;
  solde_n_1: string;
}
