import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { PcgGlobalItem } from "../pcg.interface";

export const updatePcgGlobal = createAsyncThunk(
	"pcg/updatePcgGlobal",
	async (data: { id: string; pcg: PcgGlobalItem }, thunkAPI) => {
		try {
			const response = await axios.patch(`/compta/pcg/${data.id}`, data.pcg);
			thunkAPI.dispatch(
				enqueueSnackbar({
					message: "Pcg mis à jour avec succès",
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
