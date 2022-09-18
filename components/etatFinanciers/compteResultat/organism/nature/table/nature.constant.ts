import { Column } from "./nature.interface";

export const columns: Column[] = [
  {
    id: "capitaux_prop_passif",
    label: "CAPITAUX PROPRES ET PASSIFS",
    minWidth: 170,
  },
  { id: "solde_n", label: "Solde 2022 (N)", minWidth: 100 },
  {
    id: "solde_n_1",
    label: "Solde 2021 (N - 1)",
    minWidth: 170,
    align: "center",
  },
];
