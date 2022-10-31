import { JournalEntryHeadCell } from "./HeadCell.interface";

export const journalEntryheadCells: readonly JournalEntryHeadCell[] = [
  {
    id: "number",
    numeric: false,
    disablePadding: false,
    label: "Numéro",
  },
  {
    id: "date",
    numeric: false,
    disablePadding: false,
    label: "Date",
  },
  {
    id: "reference",
    numeric: false,
    disablePadding: false,
    label: "Reference",
  },
  {
    id: "journalId",
    numeric: false,
    disablePadding: false,
    label: "Journal",
  },
  {
    id: "fiscalYear",
    numeric: false,
    disablePadding: false,
    label: "Annee ",
  },
];
