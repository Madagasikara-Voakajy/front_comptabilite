import { Data } from "./etat.interface";

export function createData(
  vide: string,
  vide1: string,
  credit: string,
  debit: string,
  credit1: string,
  debit1: string
): Data {
  return { vide, vide1, debit, credit, debit1, credit1 };
}
