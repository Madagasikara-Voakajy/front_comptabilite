export interface JournalEntryItem {
  journal?: any;
  fiscal?: any;
  id?: string;
  number?: number;
  date?: string;
  reference?: string;
  journalId?: number;
  fiscalYearId?: number;
}

export interface JournalEntryInitialState {
  journalEntryListe: JournalEntryItem[];
  journalEntry: {};
  isEditing: boolean;
  loading: boolean;
  [key: string]: any;
}
