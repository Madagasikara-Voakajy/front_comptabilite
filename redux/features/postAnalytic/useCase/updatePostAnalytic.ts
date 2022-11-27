import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { PostAnalyticItem } from "../postAnalytic.interface";

export const updatePostAnalytic = createAsyncThunk(
  "postAnalytic/updatePostAnalytic",
  async (data: { id: string; postAnalytic: PostAnalyticItem }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/compta/post-analytic/${data.id}`,
        data.postAnalytic
      );
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "poste analytique mis à jour avec succès",
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
