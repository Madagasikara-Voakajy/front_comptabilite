export interface JournalItem {
  id?: string;
  name?: string;
  code?: string;
  fileId?: number;
  typeId?: number;
}

export interface JournalInitialState {
  journalListe: JournalItem[];
  journal: JournalItem;
  isEditing: boolean;
  loading: boolean;
  [key: string]: any;
}
