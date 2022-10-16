import { Order } from "../../../../../config/table.config";
import { JournalTypeItem } from "../../../../../redux/features/journalType/journalType.interface";

export interface TypeJournalHeadCell {
  id: any;
  label: string;
  numeric: boolean;
  disablePadding: boolean;
}

export interface TypeJournalTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof JournalTypeItem
  ) => void;
  order: Order;
  orderBy: string;
}
