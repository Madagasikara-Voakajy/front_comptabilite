import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../../axios";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { PcgGlobalItem } from "../pcg.interface";

export const createPcgGlobal = createAsyncThunk(
	"pcg/createPcgGlobal",
	async (data: PcgGlobalItem, thunkAPI) => {
		try {
			const response = await axios.post("/compta/pcg", data);
			thunkAPI.dispatch(
				enqueueSnackbar({
					message: "PCG créé avec succès",
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
							message: "Cet pcg exite déja:" + data.name,
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
