import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { PostAnalyticItem } from "../postAnalytic.interface";

export const createPostAnalytic = createAsyncThunk(
  "postAnalytic/createPostAnalytic",
  async (data: PostAnalyticItem, thunkAPI) => {
    try {
      const response = await axios.post("/compta/post-analytic", data);
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Poste Analytique créé avec succès",
          options: {
            variant: "success",
          },
        })
      );
      return response.data;
    } catch (error: any) {
      if (error.response) {
        if (error.response.data.statusCode == 409) {
          thunkAPI.dispatch(
            enqueueSnackbar({
              message: "Cet nom exite déja:" + data.name,
              options: { variant: "error" },
            })
          );
        }
        return thunkAPI.rejectWithValue(error);
      }
      throw error;
    }
  }
);
