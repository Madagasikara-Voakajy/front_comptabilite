import { Order } from "../../../../config/table.config";
import { JournalItemItem } from "../../../../redux/features/journalItem/journalItem.interface";
export interface JournalItemHeadCell {
  disablePadding: boolean;
  id: any;
  label: string;
  numeric: boolean;
}

export interface JournalItemTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof JournalItemItem
  ) => void;
  order: Order;
  orderBy: string;
}
