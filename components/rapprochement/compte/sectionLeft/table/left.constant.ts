import { Column } from "./left.interface";

export const columns: Column[] = [
  { id: "Date", label: "Date", minWidth: 60 },
  { id: "Libelles", label: "Libellés", minWidth: 60 },
  {
    id: "Debit",
    label: "Débit(+)",
    minWidth: 60,
    align: "center",
  },
  {
    id: "Credit",
    label: "Crédit(-)",
    minWidth: 60,
    align: "center",
  },
  {
    id: "checking",
    label: "checking",
    minWidth: 60,
    align: "center",
  },
];
