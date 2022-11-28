import { CreateModeDePaiement } from "./function-modeDepaiement";
import { HeadCellModeDePaiement } from "./type-variable-ModeDepaiement";

export const headCellsModeDePaiement: readonly HeadCellModeDePaiement[] = [
  {
    id: "mode",
    numeric: false,
    disablePadding: true,
    label: "Mode de paiement",
  },
];

export const rowssmie = [
  CreateModeDePaiement("Mobile money"),
  CreateModeDePaiement("Banque"),
  CreateModeDePaiement("Mobile money"),
  CreateModeDePaiement("Cheque"),
  CreateModeDePaiement("Mobile money"),
  CreateModeDePaiement("Mobile money"),
  CreateModeDePaiement("Cheque"),
  CreateModeDePaiement("Banque"),
  CreateModeDePaiement("Mobile money"),
  CreateModeDePaiement("Banque"),
  CreateModeDePaiement("Cheque"),
  CreateModeDePaiement("Banque"),
  CreateModeDePaiement("Mobile money"),
  CreateModeDePaiement("Cheque"),
];
