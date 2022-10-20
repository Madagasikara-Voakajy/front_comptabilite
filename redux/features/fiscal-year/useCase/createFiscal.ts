import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { FiscalItem } from "../fiscalSlice.interface";

/**
 * create a new fiscal
 * @param FiscalItem
 * @param thunkAPI
 * @returns {Promise<void>}
 * @memberof useCase
 * @description :this function is used to create a new Fiscal
 */

export const createFiscal = createAsyncThunk(
  "fiscal/createFiscal",
  async (fiscal: FiscalItem, thunkAPI) => {
    try {
      const response = await axios.post("/compta/fiscal-year", fiscal);
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Année d'exercice created successfully",
          options: { variant: "success" },
        })
      );
      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error);
      }
      return;
    }
  }
);