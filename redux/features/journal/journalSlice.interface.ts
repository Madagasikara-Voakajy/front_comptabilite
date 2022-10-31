export interface JournalItem {
  id?: string;
  name?: string;
  code?: string;
  fileId?: number;
  typeId?: number;
  [x: string]: any;
}

export interface JournalInitialState {
  journalListe: JournalItem[];
  journal: JournalItem;
  isEditing: boolean;
  loading: boolean;
  [key: string]: any;
}
