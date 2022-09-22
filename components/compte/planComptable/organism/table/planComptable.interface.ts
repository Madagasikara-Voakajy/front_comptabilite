import { Order } from "../../../../../config/table.config";
import { PcgItem } from "../../../../../redux/features/pcg/pcg.interface";

export interface PlanComptableHeadCell {
  id: any;
  label: string;
  numeric: boolean;
  disablePadding: boolean;
}

export interface PlanComptableTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof PcgItem
  ) => void;
  order: Order;
  orderBy: string;
}
