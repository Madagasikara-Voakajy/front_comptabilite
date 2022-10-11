import { Order } from "../../../../config/table.config";
import { GrantItem } from "../../../../redux/features/grant/grant.interface";
export interface GrantHeadCell {
  disablePadding: boolean;
  id: any;
  label: string;
  numeric: boolean;
}

export interface GrantTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof GrantItem
  ) => void;
  order: Order;
  orderBy: string;
}
