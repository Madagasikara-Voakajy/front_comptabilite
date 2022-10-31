import { Order } from "../../../../config/table.config";
import { JournalItem } from "../../../../redux/features/journal/journalSlice.interface";



export interface JournalHeadCell {
  disablePadding: boolean;
  id: any;
  label: string;
  numeric: boolean;
}

export interface JournalTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof JournalItem
  ) => void;
  order: Order;
  orderBy: string;
}
