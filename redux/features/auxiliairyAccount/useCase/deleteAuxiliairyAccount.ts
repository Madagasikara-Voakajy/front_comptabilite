import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../axios/axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";

export const deleteAuxiliairyAccount = createAsyncThunk(
  "auxiliairyAccount/deleteAuxiliairyAccount",
  async (data: { id: string }, thunkAPI) => {
    try {
      const response = await axios.delete(
        `/compta/auxiliary-account/${data.id}`
      );
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Compte auxilliaire supprimé avec succès",
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
