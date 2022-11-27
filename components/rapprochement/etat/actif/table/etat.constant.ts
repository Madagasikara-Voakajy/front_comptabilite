import { Column } from "./etat.interface";

export const columns: Column[] = [
  { id: "vide", label: " ", minWidth: 60 },
  { id: "vide1", label: " ", minWidth: 170 },
  { id: "debit", label: "Débit", minWidth: 170 },
  { id: "credit", label: "Crédit", minWidth: 170 },
  {
    id: "debit1",
    label: "Débit",
    minWidth: 170,
    align: "center",
  },
  {
    id: "credit1",
    label: "Crédit",
    minWidth: 170,
    align: "center",
  },
];
