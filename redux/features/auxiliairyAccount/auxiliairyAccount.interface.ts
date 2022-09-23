export interface AuxiliairyAccountItem {
  id?: string;
  name?: string;
  type?: string;
  activity?: string;
  NIF?: string;
  STAT?: string;
  RCS?: string;
  coutnry?: string;
  phone?: string;
  address?: string;
  email?: string;
  postalCode?: string;
  defaultAccountId?: string;
}

export interface AuxiliairyAccountInitialState {
  auxiliaryAccountList: AuxiliairyAccountItem[];
  auxiliaryAccount: AuxiliairyAccountItem;
  isEditing: boolean;
  loading: boolean;
  [key: string]: any;
}
