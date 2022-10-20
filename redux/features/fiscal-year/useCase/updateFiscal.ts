import { createAsyncThunk } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { axios } from "../../../../axios";
import { FiscalItem } from "../fiscalSlice.interface";
/**
 * update a fiscal 
 * @param data : { id: string, fiscal: FiscalItem } : the id of the fiscal to update and the fiscal data
 * @param thunkAPI
 * @returns {Promise<void>}
 * @memberof useCases
 * @description : This function is used to update a comptaFile
 */
export const updateFiscal = createAsyncThunk(
	"fiscal/updateFiscal",
	async (data: { id: string; fiscal: FiscalItem }, thunkAPI) => {
		try {
			const response = await axios.patch(
				`/compta/fiscal-year/${data.id}`,
				data.fiscal
			);
			thunkAPI.dispatch(
				enqueueSnackbar({
					message: "Année d'exercice updated successfully",
					options: { variant: "success" },
				})
			);
			console.log(data);
			
			return response.data;
		} catch (error: any) {
			if (error.response) {
				return thunkAPI.rejectWithValue(error);
			}
			return error;
		}
	}
);
