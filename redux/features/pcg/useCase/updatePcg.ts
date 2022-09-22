import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { PcgItem } from "../pcg.interface";

export const updatePcg = createAsyncThunk(
  "Pcg/updatePcg",
  async (data: { id: string; pcg: PcgItem }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/compta/chart-of-account/${data.id}`,
        data.pcg
      );
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Plan comptable général mis à jour avec succès",
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
