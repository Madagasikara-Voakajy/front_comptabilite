import { Order } from "../../../../../config/table.config";
import { BudgetLineItem } from "../../../../../redux/features/budgetLine/budgetLine.interface";
export interface LigneBudgetaireHeadCell {
  disablePadding: boolean;
  id: any;
  label: string;
  numeric: boolean;
}

export interface LigneBudgetaireTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof BudgetLineItem
  ) => void;
  order: Order;
  orderBy: string;
}
