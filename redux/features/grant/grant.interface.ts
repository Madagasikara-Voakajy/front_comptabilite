export interface GrantItem {
  id?: string;
  code?: string;
  postAnalyticId?: number;
  [x: string]: any;
}

export interface GrantInitialState {
  grantList: GrantItem[];
  grant: GrantItem;
  isEditing: boolean;
  loading: boolean;
  [key: string]: any;
}
