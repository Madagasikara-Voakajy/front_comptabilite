import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { BudgetLineItem } from "../budgetLine.interface";

export const updateBudgetLine = createAsyncThunk(
  "BudgetLine/updateBudgetLine",
  async (data: { id: string; budgetLine: BudgetLineItem }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/compta/budget-line/${data.id}`,
        data.budgetLine
      );
      thunkAPI.dispatch(
        enqueueSnackbar({
          message: "Ligne Budgetaire mis à jour avec succès",
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
