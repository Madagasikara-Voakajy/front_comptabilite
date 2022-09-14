import { createData } from "./function";
import { HeadCell } from "./type-variable";

export const headCells: readonly HeadCell[] = [
    {
      id: 'nom',
      numeric: false,
      disablePadding: true,
      label: 'Nom',
    },
    {
      id: 'type',
      numeric: true,
      disablePadding: false,
      label: 'Type',
    },
    {
      id: 'compte',
      numeric: true,
      disablePadding: false,
      label: 'Compte contre partie',
    },
    {
      id: 'code',
      numeric: true,
      disablePadding: false,
      label: 'Code préfixe',
    },
  ];

  export const rows = [
    createData('Salaires', 'Divers', 'Lorem ipsum', '0000'),
    createData('Espéces', 'Espéces', 'Lorem ipsum', '0000'),
    createData('Banque', 'Banque', 'Lorem ipsum', '0000'),
    createData('TVA sur encaissements', 'Divers', 'Lorem ipsum', '0000'),
    createData('Opérations dicerses', 'Divers', 'Lorem ipsum', '0000'),
    createData('Salaires', 'Divers', 'Lorem ipsum', '0000'),
    createData('Espéces', 'Espéces', 'Lorem ipsum', '0000'),
    createData('Banque', 'Banque', 'Lorem ipsum', '0000'),
    createData('TVA sur encaissements', 'Divers', 'Lorem ipsum', '0000'),
    createData('Opérations dicerses', 'Divers', 'Lorem ipsum', '0000'),
  
  
  ];