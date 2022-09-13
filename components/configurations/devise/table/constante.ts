import { createData } from "./function";
import { HeadCell } from "./type-variable";

export const headCells: readonly HeadCell[] = [
    {
      id: 'iso',
      numeric: false,
      disablePadding: true,
      label: 'ISO',
    },
    {
      id: 'nom',
      numeric: true,
      disablePadding: false,
      label: 'Nom',
    },
    {
      id: 'separateur',
      numeric: true,
      disablePadding: false,
      label: 'Séparateur de millier',
    },
    {
      id: 'symbole',
      numeric: true,
      disablePadding: false,
      label: 'Symbole',
    },
    {
      id: 'nombre',
      numeric: true,
      disablePadding: false,
      label: 'Nombre de chiffre aprés virgule',
    },
  ];

  export const rows = [
    createData('MGA', 'Malagasy', ',', 'Ar', '2'),
    createData('Euro', 'Euro', ',', '£', '2'),
    createData('LS', 'Livre Sterling', ',', 'Ls', '2'),
    createData('Dollar', 'Dollar Americain', ',', '$', '2'),
    createData('FRC', 'franc', ',', 'fr', '2'),
    createData('MGA', 'Malagasy', ',', 'Ar', '2'),
    createData('Euro', 'Euro', ',', '£', '2'),
    createData('LS', 'Livre Sterling', ',', 'Ls', '2'),
    createData('Dollar', 'Dollar Americain', ',', '$', '2'),
    createData('FRC', 'franc', ',', 'fr', '2'),
  
  
  ];