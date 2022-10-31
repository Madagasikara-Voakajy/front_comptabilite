import { JournalHeadCell } from "./HeadCell.interface";

export const journalheadCells: readonly JournalHeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Nom",
  },
  {
    id: "code",
    numeric: false,
    disablePadding: false,
    label: "Code Prefixe",
  },
  {
    id: "fileId",
    numeric: false,
    disablePadding: false,
    label: "File",
  },
  {
    id: "typeId",
    numeric: false,
    disablePadding: false,
    label: "Type",
  },
];
