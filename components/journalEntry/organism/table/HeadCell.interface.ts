import { Order } from "../../../../config/table.config";
import { JournalEntryItem } from "../../../../redux/features/journal-entry/JournalEntrySlice.interface";



export interface JournalEntryHeadCell {
  disablePadding: boolean;
  id: any;
  label: string;
  numeric: boolean;
}

export interface JournalEntryTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof JournalEntryItem
  ) => void;
  order: Order;
  orderBy: string;
}
