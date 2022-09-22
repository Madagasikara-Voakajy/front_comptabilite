export default interface OneData {
  date: string;
  journal: string;
  numero: string;
  compte: string;
  auxiliaire: string;
  libelle: string;
}

export interface OneHeadCell {
  disablePadding: boolean;
  id: keyof OneData;
  label: string;
  numeric: boolean;
}

export type Order = 'asc' | 'desc';

export interface EnhancedTableToolbarProps {
  numSelected: number;
}

export interface  OneEnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof OneData
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}