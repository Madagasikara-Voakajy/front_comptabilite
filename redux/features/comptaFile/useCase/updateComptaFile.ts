import { createAsyncThunk } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { axios } from "../../../../axios";
import { ComptaFileItem } from "../comptaFileSlice.interface";
/**
 * update a comptaFile 
 * @param data : { id: string, comptaFile: ComptaFileItem } : the id of the currency to update and the comptaFile data
 * @param thunkAPI
 * @returns {Promise<void>}
 * @memberof useCases
 * @description : This function is used to update a comptaFile
 */
export const updateComptaFile = createAsyncThunk(
	"comptaFile/updateComptaFile",
	async (data: { id: string; comptaFile: ComptaFileItem }, thunkAPI) => {
		try {
			const response = await axios.patch(
				`/compta/file/${data.id}`,
				data.comptaFile
			);
			thunkAPI.dispatch(
				enqueueSnackbar({
					message: "Fiche Comptable updated successfully",
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
