import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";

export const deleteComptaFile = createAsyncThunk(
  "comptaFile/deleteComptaFile",
  async (data: { id: string }, thunkAPI) => {
    try {
      const response = await axios.delete(`/compta/file/${data.id}`);
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Fiche Comptable supprimé avec succès",
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
