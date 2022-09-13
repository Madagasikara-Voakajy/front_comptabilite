import { Order } from "../../../../../config/table.config";
// import { LeaveTypeItem } from "../../../../../../redux/features/leaveType/leaveTypeSlice";

export interface PlanComptableHeadCell {
  id: any;
  label: string;
  numeric: boolean;
  disablePadding: boolean;
}

export interface PlanComptableTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    // property: keyof LeaveTypeItem
  ) => void;
  order: Order;
  orderBy: string;
}
