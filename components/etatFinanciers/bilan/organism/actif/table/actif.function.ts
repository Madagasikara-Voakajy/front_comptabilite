import { Data } from "./actif.interface";

export function createData(
  ACTIF: string,
  Brut: string,
  Amort_prov: string,
  Net: string,
  Net1: string
): Data {
  return { ACTIF, Brut, Amort_prov, Net, Net1 };
}
