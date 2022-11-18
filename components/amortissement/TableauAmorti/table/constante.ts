import { createData } from "./function";
import { HeadCell } from "./type-variable";

export const headCells: readonly HeadCell[] = [
  {
    id: "annee",
    numeric: false,
    disablePadding: true,
    label: "Année",
  },
  {
    id: "valeur",
    numeric: false,
    disablePadding: true,
    label: "Valeur d'origine",
  },
  {
    id: "annuite",
    numeric: false,
    disablePadding: true,
    label: "Annuités",
  },
  {
    id: "cumul",
    numeric: false,
    disablePadding: true,
    label: "Cumul",
  },
  {
    id: "valeurNetteComptable",
    numeric: false,
    disablePadding: true,
    label: "Valeur nette comptable",
  },
];

export const rows = [
  createData(
    "2022",
    "1500000",
    "1,875,000.00",
    "1,875,000.00",
    "13,125,000.00"
  ),
  createData(
    "2022",
    "1500000",
    "1,875,000.00",
    "1,875,000.00",
    "13,125,000.00"
  ),
  createData(
    "2022",
    "1500000",
    "1,875,000.00",
    "1,875,000.00",
    "13,125,000.00"
  ),
  createData(
    "2022",
    "1500000",
    "1,875,000.00",
    "1,875,000.00",
    "13,125,000.00"
  ),
  createData(
    "2022",
    "1500000",
    "1,875,000.00",
    "1,875,000.00",
    "13,125,000.00"
  ),
  createData(
    "2022",
    "1500000",
    "1,875,000.00",
    "1,875,000.00",
    "13,125,000.00"
  ),
  createData(
    "2022",
    "1500000",
    "1,875,000.00",
    "1,875,000.00",
    "13,125,000.00"
  ),
  createData(
    "2022",
    "1500000",
    "1,875,000.00",
    "1,875,000.00",
    "13,125,000.00"
  ),
  createData(
    "2022",
    "1500000",
    "1,875,000.00",
    "1,875,000.00",
    "13,125,000.00"
  ),
  createData(
    "2022",
    "1500000",
    "1,875,000.00",
    "1,875,000.00",
    "13,125,000.00"
  ),
];
