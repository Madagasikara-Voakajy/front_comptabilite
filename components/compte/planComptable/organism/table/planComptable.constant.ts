import { PlanComptableHeadCell } from "./planComptable.interface";

export const planComptableHeadCells: readonly PlanComptableHeadCell[] = [
  {
    id: "numero_de_compterence",
    numeric: false,
    disablePadding: false,
    label: "Numéro de compte",
  },
  {
    id: "intutile_de_compte",
    numeric: false,
    disablePadding: false,
    label: "Intutilé de compte",
  },
  {
    id: "type",
    numeric: false,
    disablePadding: false,
    label: "Type",
  }
];
