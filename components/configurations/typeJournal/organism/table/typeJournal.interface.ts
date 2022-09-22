import { Order } from "../../../../../config/table.config";
// import { LeaveTypeItem } from "../../../../../../redux/features/leaveType/leaveTypeSlice";

export interface TypeJournalHeadCell {
  id: any;
  label: string;
  numeric: boolean;
  disablePadding: boolean;
}

export interface TypeJournalTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>
    // property: keyof LeaveTypeItem
  ) => void;
  order: Order;
  orderBy: string;
}
