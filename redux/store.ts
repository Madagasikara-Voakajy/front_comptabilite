import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { customizationSlice } from "./features/slices/customizationSlice";
import { menuSlice } from "./features/menu/menuSlice";
import { menuProfileSlice } from "./features/menu/menuprofileSlice";
import { authSlice } from "./features/auth/authSlice";
import { notificationSlice } from "./features/notification/notificationSlice";
import { pcgSlice } from "./features/pcg/pcgSlice";
import { auxiliaryAccountSlice } from "./features/auxiliairyAccount/auxiliairyAccountSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    customization: customizationSlice.reducer,
    menu: menuSlice.reducer,
    menuprofile: menuProfileSlice.reducer,
    notification: notificationSlice.reducer,
    pcg: pcgSlice.reducer,
    auxiliaryAccount: auxiliaryAccountSlice.reducer,
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
