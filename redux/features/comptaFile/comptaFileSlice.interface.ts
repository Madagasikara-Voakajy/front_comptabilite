export interface ComptaFileItem {
  id?: string;
  companyName?: string;
  activity?: string;
  NIF?: string;
  STAT?: string;
  RCS?: string;
  country?: string;
  phone?: string;
  address?: string;
  email?: string;
  postalCode?: string;
  fiscalYearType?: string;
  currencyId?: string;
}

export interface ComptaFileInitialState {
  comptaFileListe: ComptaFileItem[];
  comptaFile: ComptaFileItem;
  isEditing: boolean;
  loading: boolean;
  [key: string]: any;
}
