import { Order } from "../../../../config/table.config";
import { AuxiliairyAccountItem } from "../../../../redux/features/auxiliairyAccount/auxiliairyAccount.interface";
export interface AuxiliaireHeadCell {
  disablePadding: boolean;
  id: any;
  label: string;
  numeric: boolean;
}

export interface AuxiliaireTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof AuxiliairyAccountItem
  ) => void;
  order: Order;
  orderBy: string;
}
