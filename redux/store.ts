import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { customizationSlice } from "./features/slices/customizationSlice";
import { menuSlice } from "./features/menu/menuSlice";
import { menuProfileSlice } from "./features/menu/menuprofileSlice";
import { authSlice } from "./features/auth/authSlice";
import { notificationSlice } from "./features/notification/notificationSlice";
import { currencySlice } from "./features/currency/currencySlice";
import { comptaFileSlice } from "./features/comptaFile/comptaFileSlice";



export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    customization: customizationSlice.reducer,
    menu: menuSlice.reducer,
    menuprofile: menuProfileSlice.reducer,
    notification: notificationSlice.reducer,
    currency: currencySlice.reducer,
    comptaFile: comptaFileSlice.reducer,
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
