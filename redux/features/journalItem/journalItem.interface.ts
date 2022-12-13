export interface ComptaJournalItem {
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
  journalEntry?: any;
  auxiliaryAccount?: any;
  chartOfAccount?: any;
  [x: string]: any;
}

export interface ComptaJournalItemInitialState {
  journalItemList: ComptaJournalItem[];
  journalItem: ComptaJournalItem;
  isEditing: boolean;
  loading: boolean;
  [key: string]: any;
  employeeList: [];
}
