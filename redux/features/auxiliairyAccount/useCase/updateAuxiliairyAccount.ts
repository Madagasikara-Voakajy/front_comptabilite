import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { AuxiliairyAccountItem } from "../auxiliairyAccount.interface";

export const updateAuxiliairyAccount = createAsyncThunk(
  "auxiliairyAccount/updateAuxiliairyAccount",
  async (
    data: { id: string; auxiliairyAccount: AuxiliairyAccountItem },
    thunkAPI
  ) => {
    try {
      const response = await axios.patch(
        `/compta/auxiliary-account/${data.id}`,
        data.auxiliairyAccount
      );
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Compte auxilliaire mis à jour avec succès",
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
