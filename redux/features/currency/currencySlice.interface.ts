export interface CurrencyItem {
  id?: string;
  iso?: string;
  symbol?: string;
  name?: string;
  lastUpdated?: string;
  rate?: number;
  decimalPlaces?: number;
  symbolPosition?: string;
  thousandSeparator?: string;
}

export interface CurrencyInitialState {
  currencyListe: CurrencyItem[];
  currency: CurrencyItem;
  isEditing: boolean;
  loading: boolean;
  [key: string]: any;
}
