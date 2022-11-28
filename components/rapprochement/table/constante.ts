import { createData } from "./function";
import { HeadCell } from "./type-variable";

export const headCells: readonly HeadCell[] = [
  {
    id: "date",
    numeric: false,
    disablePadding: true,
    label: "Date",
  },
  {
    id: "numero",
    numeric: true,
    disablePadding: false,
    label: "Numéro",
  },
  {
    id: "numeroPiece",
    numeric: true,
    disablePadding: false,
    label: "Numéro Piéce",
  },
  {
    id: "journal",
    numeric: true,
    disablePadding: false,
    label: "Journal",
  },
  {
    id: "total",
    numeric: true,
    disablePadding: false,
    label: "Total",
  },
];

export const rows = [
  createData("23/04/2022", "OD/2021/12/0001", "SAL_001 ", "Salaires", "10 000"),
  createData("23/04/2022", "OD/2021/12/0001", "SAL_001 ", "Salaires", "10 000"),
  createData("23/04/2022", "OD/2021/12/0001", "SAL_001 ", "Salaires", "10 000"),
  createData("23/04/2022", "OD/2021/12/0001", "SAL_001 ", "Salaires", "10 000"),
  createData("23/04/2022", "OD/2021/12/0001", "SAL_001 ", "Salaires", "10 000"),
  createData("23/04/2022", "OD/2021/12/0001", "SAL_001 ", "Salaires", "10 000"),
  createData("23/04/2022", "OD/2021/12/0001", "SAL_001 ", "Salaires", "10 000"),
  createData("23/04/2022", "OD/2021/12/0001", "SAL_001 ", "Salaires", "10 000"),
  createData("23/04/2022", "OD/2021/12/0001", "SAL_001 ", "Salaires", "10 000"),
  createData("23/04/2022", "OD/2021/12/0001", "SAL_001 ", "Salaires", "10 000"),
];
