export interface JournalEntryItem {
  journal?: any;
  fiscal?: any;
  id?: string;
  number?: number;
  date?: string;
  reference?: string;
  journalId?: number;
  fiscalYearId?: number;
  [x: string]: any;
}

export interface JournalEntryInitialState {
  journalEntryListe: JournalEntryItem[];
  journalEntry: JournalEntryItem;
  isEditing: boolean;
  loading: boolean;
  [key: string]: any;
}
