export interface PostAnalyticItem {
  id?: string;
  name?: string;
}

export interface PostAnalyticInitialState {
  postAnalyticList: PostAnalyticItem[];
  postAnalytic: PostAnalyticItem;
  isEditing: boolean;
  loading: boolean;
  [key: string]: any;
}
