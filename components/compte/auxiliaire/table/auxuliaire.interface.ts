import { Order } from "../../../../config/table.config";
// import { AuxiliaireItem } from "../../../redux/features/recruitmentRequest/recruitmentRequestSlice.interface";

export interface AuxiliaireHeadCell {
  disablePadding: boolean;
  id: any;
  label: string;
  numeric: boolean;
}

export interface AuxiliaireTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>
    // property: keyof AuxiliaireItem
  ) => void;
  order: Order;
  orderBy: string;
}
