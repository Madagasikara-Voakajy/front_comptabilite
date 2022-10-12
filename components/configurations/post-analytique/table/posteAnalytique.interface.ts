import { Order } from "../../../../config/table.config";
import { PostAnalyticItem } from "../../../../redux/features/postAnalytic/postAnalytic.interface";
export interface PosteAnalytiqueHeadCell {
  disablePadding: boolean;
  id: any;
  label: string;
  numeric: boolean;
}

export interface PosteAnalytiqueTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof PostAnalyticItem
  ) => void;
  order: Order;
  orderBy: string;
}
