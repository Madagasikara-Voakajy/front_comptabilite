import { HeadCell } from "./HeadCell.interface";

export const comptaJournalItemHeadCells: readonly HeadCell[] = [
  {
    id: "chartOfAccountId",
    numeric: false,
    disablePadding: false,
    label: "Compte Générale",
  },
  {
    id: "debit",
    numeric: false,
    disablePadding: false,
    label: "Débit",
  },
  {
    id: "credit",
    numeric: false,
    disablePadding: false,
    label: "Crédit",
  },
  {
    id: "refBU",
    numeric: false,
    disablePadding: false,
    label: "Solde(N)",
  },
  {
    id: "refMV",
    numeric: false,
    disablePadding: false,
    label: "Solde(N-1)",
  },
];
