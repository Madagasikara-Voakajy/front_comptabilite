export interface JournalTypeItem {
  id?: string;
  type?: string;
  defaultAccountId?: 0;
  [key: string]: any;
}

export interface JournalTypeInitialState {
  journalTypeList: JournalTypeItem[];
  journalType: JournalTypeItem;
  isEditing: boolean;
  loading: boolean;
  [key: string]: any;
}
