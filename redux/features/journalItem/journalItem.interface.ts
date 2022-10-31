export interface JournalItemItem {
  chartOfAccountId?: number;
  auxiliaryAccountId?: number;
  label?: string;
  debit?: number;
  credit?: number;
  currencyId?: number;
  checkNumber?: string;
  refBU?: string;
  refMV?: string;
  refAR?: string;
  journalEntryId?: number;
  [x: string]: any;
}

export interface JournalItemInitialState {
  journalItemList: JournalItemItem[];
  journalItem: JournalItemItem;
  isEditing: boolean;
  loading: boolean;
  [key: string]: any;
}
