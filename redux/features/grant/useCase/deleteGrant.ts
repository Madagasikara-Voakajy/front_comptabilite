import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../axios/axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";

export const deleteGrant = createAsyncThunk(
  "grant/deleteGrant",
  async (data: { id: string }, thunkAPI) => {
    try {
      const response = await axios.delete(`/compta/grant/${data.id}`);
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Grant supprimé avec succès",
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
