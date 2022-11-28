import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../../axios/axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";

export const deletePostAnalytic = createAsyncThunk(
  "postAnalytic/deletePostAnalytic",
  async (data: { id: string }, thunkAPI) => {
    try {
      const response = await axios.delete(`/compta/post-analytic/${data.id}`);
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Poste analytique supprimé avec succès",
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
