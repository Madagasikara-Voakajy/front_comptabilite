import { Data } from "./right.interface";

export function createData(
  Date: string,
  Libelles: string,
  Debit: string,
  Credit: string,
  checking: string
): Data {
  return { Date, Libelles, Debit, Credit, checking };
}
