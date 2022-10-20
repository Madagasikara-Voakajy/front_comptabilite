export interface FiscalItem {
  id?: string;
  year?: number;
  locked?: boolean;
  fileId?: number;
}

export interface FiscalInitialState {
  fiscalListe: FiscalItem[];
  fiscal: {};
  isEditing: boolean;
  loading: boolean;
  [key: string]: any;
}
