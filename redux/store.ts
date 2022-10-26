import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { customizationSlice } from "./features/slices/customizationSlice";
import { menuSlice } from "./features/menu/menuSlice";
import { menuProfileSlice } from "./features/menu/menuprofileSlice";
import { authSlice } from "./features/auth/authSlice";
import { auxiliaryAccountSlice } from "./features/auxiliairyAccount/auxiliairyAccountSlice";
import { pcgSlice } from "./features/pcg/pcgSlice";
import { notificationSlice } from "./features/notification/notificationSlice";
import { currencySlice } from "./features/currency/currencySlice";
import { postAnalyticSlice } from "./features/postAnalytic/postAnalyticSlice";
import { grantSlice } from "./features/grant/grantSlice";
import { budgetLineSlice } from "./features/budgetLine/budgetLineSlice";
import { comptaFileSlice } from "./features/comptaFile/comptaFileSlice";
import { journalTypeSlice } from "./features/journalType/journalTypeSlice";
import { fiscalSlice } from "./features/fiscal-year/fiscalSlice";
import { journalSlice } from "./features/journal/journalSlice";
import { journalEntrySlice } from "./features/journal-entry/JournalEntrySlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    customization: customizationSlice.reducer,
    menu: menuSlice.reducer,
    menuprofile: menuProfileSlice.reducer,
    notification: notificationSlice.reducer,
    currency: currencySlice.reducer,
    auxiliaryAccount: auxiliaryAccountSlice.reducer,
    pcg: pcgSlice.reducer,
    postAnalytic: postAnalyticSlice.reducer,
    grant: grantSlice.reducer,
    budgetLine: budgetLineSlice.reducer,
    comptaFile: comptaFileSlice.reducer,
    journalType: journalTypeSlice.reducer,
    fiscal: fiscalSlice.reducer,
    journal: journalSlice.reducer,
    journalEntry: journalEntrySlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
