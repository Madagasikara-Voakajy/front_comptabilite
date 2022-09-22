import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { PcgItem } from "../pcg.interface";

export const createPcg = createAsyncThunk(
  "pcg/createPcg",
  async (data: PcgItem, thunkAPI) => {
    try {
      const response = await axios.post("/compta/chart-of-account", data);
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Plan comptable général créé avec succès",
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
