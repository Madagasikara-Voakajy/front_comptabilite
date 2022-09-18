import { Data } from "./tableauVariationCapitauxPropres.interface";

export function createData(
  identifiant: string,
  capital_social: string,
  primes_reserves: string,
  ecart_evaluation: string,
  resultat_R_N: string,
  total: string
): Data {
  return {
    identifiant,
    capital_social,
    primes_reserves,
    ecart_evaluation,
    resultat_R_N,
    total,
  };
}
