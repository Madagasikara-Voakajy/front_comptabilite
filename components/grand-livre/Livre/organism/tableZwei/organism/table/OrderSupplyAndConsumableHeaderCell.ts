import { HeadCell } from "./HeadCell.interface";

export const comptaJournalItemHeadCells: readonly HeadCell[] = [
  {
    id: "date",
    numeric: false,
    disablePadding: false,
    label: "Date",
  },
  {
    id: "journalEntryId",
    numeric: false,
    disablePadding: false,
    label: "Journal",
  },
  {
    id: "currencyId",
    numeric: false,
    disablePadding: false,
    label: "devise",
  },
  {
    id: "checkNumber",
    numeric: false,
    disablePadding: false,
    label: "Numéro de Pièce",
  },
  {
    id: "chartOfAccountId",
    numeric: false,
    disablePadding: false,
    label: "Compte Générale",
  },
  {
    id: "auxiliaryAccountId",
    numeric: false,
    disablePadding: false,
    label: "Compte Auxiliaire",
  },
  {
    id: "libellé",
    numeric: false,
    disablePadding: false,
    label: "Libellé",
  },
];
