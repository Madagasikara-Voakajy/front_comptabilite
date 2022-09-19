import { createData } from "./function";
import { HeadCell } from "./type-variable";

export const headCells: readonly HeadCell[] = [
    {
      id: 'compte',
      numeric: false,
      disablePadding: true,
      label: 'compte générale',
    },
    {
      id: 'debit',
      numeric: true,
      disablePadding: false,
      label: 'Débit',
    },
    {
      id: 'credit',
      numeric: true,
      disablePadding: false,
      label: 'Crédit',
    },
    {
      id: 'solde',
      numeric: true,
      disablePadding: false,
      label: 'Solde(N)',
    },
    {
      id: 'solde1',
      numeric: true,
      disablePadding: false,
      label: 'Solde(N-1)',
    },
  ];

  export const rows = [
    createData('101', '2000000', '300000', '(100000)', '100000'),
    createData('102', '2000000', '300000', '(100000)', '100000'),
    createData('103', '2000000', '300000', '(100000)', '100000'),
    createData('104', '2000000', '300000', '(100000)', '100000'),
    createData('105', '2000000', '300000', '(100000)', '100000'),
    createData('106', '2000000', '300000', '(100000)', '100000'),
    createData('107', '2000000', '300000', '(100000)', '100000'),
    createData('108', '2000000', '300000', '(100000)', '100000'),
    createData('109', '2000000', '300000', '(100000)', '100000'),
  ];