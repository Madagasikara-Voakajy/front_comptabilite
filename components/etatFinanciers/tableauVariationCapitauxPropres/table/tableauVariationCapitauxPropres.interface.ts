export interface Column {
  id:
    | "identifiant"
    | "capital_social"
    | "primes_reserves"
    | "ecart_evaluation"
    | "resultat_R_N"
    | "total";
  label: string;
  minWidth?: number;
  align?: "center";
  format?: (value: number) => string;
}

export interface Data {
  identifiant: string;
  capital_social: string;
  primes_reserves: string;
  ecart_evaluation: string;
  resultat_R_N: string;
  total: string;
}
