import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { AuxiliairyAccountItem } from "../auxiliairyAccount.interface";

export const createAuxiliairyAccount = createAsyncThunk(
  "auxiliairyAccount/createAuxiliairyAccount",
  async (data: AuxiliairyAccountItem, thunkAPI) => {
    try {
      const response = await axios.post("/compta/auxiliary-account", data);
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Compte auxiliaire créé avec succès",
          options: {
            variant: "success",
          },
        })
      );
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error);
      }
      throw error;
    }
  }
);
