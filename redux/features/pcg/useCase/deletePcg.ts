import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../axios/axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";

export const deletePcg = createAsyncThunk(
  "Pcg/deletePcg",
  async (data: { id: string }, thunkAPI) => {
    try {
      const response = await axios.delete(
        `/compta/chart-of-account/${data.id}`
      );
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Plan comptable général supprimé avec succès",
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
