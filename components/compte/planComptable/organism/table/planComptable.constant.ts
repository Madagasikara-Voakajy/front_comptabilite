import { PlanComptableHeadCell } from "./planComptable.interface";

export const planComptableHeadCells: readonly PlanComptableHeadCell[] = [
  {
    id: "code",
    numeric: false,
    disablePadding: false,
    label: "Code",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Nom",
  },
];
