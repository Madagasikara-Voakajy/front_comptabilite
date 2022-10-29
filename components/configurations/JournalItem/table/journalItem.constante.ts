import { JournalItemHeadCell } from "./journalItem.interface";

export const journalItemheadCells: readonly JournalItemHeadCell[] = [
  {
    id: "chartOfAccountId",
    numeric: false,
    disablePadding: false,
    label: "Code num compte",
  },
  {
    id: "auxiliaryAccountId",
    numeric: false,
    disablePadding: false,
    label: "Code auxi",
  },
  {
    id: "label",
    numeric: false,
    disablePadding: false,
    label: "label",
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
    id: "currencyId",
    numeric: false,
    disablePadding: false,
    label: "Code devise",
  },
  {
    id: "checkNumber",
    numeric: false,
    disablePadding: false,
    label: "checkNumber",
  },
  {
    id: "refBU",
    numeric: false,
    disablePadding: false,
    label: "refBU",
  },
  {
    id: "refMV",
    numeric: false,
    disablePadding: false,
    label: "refMV",
  },
  {
    id: "refAR",
    numeric: false,
    disablePadding: false,
    label: "refAR",
  },
  {
    id: "journalEntryId",
    numeric: false,
    disablePadding: false,
    label: "Code journal",
  },
];
