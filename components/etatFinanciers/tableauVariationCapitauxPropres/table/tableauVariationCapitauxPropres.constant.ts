import { Column } from "./tableauVariationCapitauxPropres.interface";

export const columns: Column[] = [
  {
    id: "identifiant",
    label: "",
    minWidth: 170,
  },
  {
    id: "capital_social",
    label: "Capital social",
    minWidth: 170,
  },
  { id: "primes_reserves", label: "Primes & réserves", minWidth: 100 },
  {
    id: "ecart_evaluation",
    label: "Ecart d’évaluation",
    minWidth: 170,
    align: "center",
  },
  {
    id: "resultat_R_N",
    label: "Résultat & R N",
    minWidth: 170,
    align: "center",
  },
  {
    id: "total",
    label: "Total",
    minWidth: 170,
    align: "center",
  },
];
