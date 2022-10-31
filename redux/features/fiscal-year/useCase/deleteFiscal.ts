import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";

export const deleteFiscal = createAsyncThunk(
  "fiscal/deleteFiscal",
  async (data: { id: string }, thunkAPI) => {
    try {
      const response = await axios.delete(`/compta/fiscal-year/${data.id}`);
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Année d'exercice supprimé avec succès",
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
