import { createData } from "./function";
import { HeadCell } from "./type-variable";

export const headCells: readonly HeadCell[] = [
  {
    id: "libelles",
    numeric: false,
    disablePadding: true,
    label: "Libellés",
  },
];

export const rows = [
  createData("23/04/2022"),
  createData("23/04/2022"),
  createData("23/04/2022"),
  createData("23/04/2022"),
  createData("23/04/2022"),
  createData("23/04/2022"),
  createData("23/04/2022"),
  createData("23/04/2022"),
  createData("23/04/2022"),
  createData("23/04/2022"),
];
