export default interface TwoData {
  date: string;
  journal: string;
  numero: string;
  compte: string;
  auxiliaire: string;
  libelle: string;
}

export interface TwoHeadCell {
  disablePadding: boolean;
  id: keyof TwoData;
  label: string;
  numeric: boolean;
}

export type Order = 'asc' | 'desc';

export interface EnhancedTableToolbarProps {
  numSelected: number;
}

export interface  TwoEnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof TwoData
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}