import { createDataOne } from "./one-function";
import { OneHeadCell } from "./one-type-variable";




export const OneheadCells: readonly OneHeadCell[] = [
    {
      id: 'date',
      numeric: false,
      disablePadding: false,
      label: 'Date',
    },
    {
      id: 'journal',
      numeric: false,
      disablePadding: false,
      label: 'Journal',
    },
    {
      id: 'numero',
      numeric: false,
      disablePadding: false,
      label: 'Numéro pièce',
    },
    {
      id: 'compte',
      numeric: false,
      disablePadding: false,
      label: 'Compte Générale',
    },
    {
      id: 'auxiliaire',
      numeric: false,
      disablePadding: false,
      label: 'Compte Auxiliaire',
    },
    {
      id: 'libelle',
      numeric: false,
      disablePadding: false,
      label: 'libellé',
    },
  ];

  export const onerows = [
    createDataOne('21/12/22','achat', '0099', '1011 Espéces', '1011 Espéces', 'achat imprimante'),   
    createDataOne('21/12/22', 'caise', '0098', '2005 Accounr receivable', '2005 Accounr receivable', 'achat imprimante'),   
    createDataOne('21/12/22','vente', '0001', '3014 Tax Payable', '3014 Tax Payable', 'achat imprimante'),
  ];