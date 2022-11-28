export default interface DataModeDePaiement {
  mode: string;
}

export type Order = "asc" | "desc";

export interface HeadCellModeDePaiement {
  disablePadding: boolean;
  id: keyof DataModeDePaiement;
  label: string;
  numeric: boolean;
}

export interface EnhancedTableToolbarProps {
  numSelected: number;
}

export interface EnhancedTablePropsModeDePaiement {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof DataModeDePaiement
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}
