export interface BudgetLineItem {
  id?: string;
  code?: string;
  grantId?: number;
  [x: string]: any;
}

export interface BudgetLineInitialState {
  budgetLineList: BudgetLineItem[];
  budgetLine: BudgetLineItem;
  isEditing: boolean;
  loading: boolean;
  [key: string]: any;
}
