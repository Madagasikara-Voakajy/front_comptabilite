import { Data } from "./nature.interface";

export function createData(
  capitaux_prop_passif: string,
  solde_n: string,
  solde_n_1: string
): Data {
  return { capitaux_prop_passif, solde_n, solde_n_1 };
}
