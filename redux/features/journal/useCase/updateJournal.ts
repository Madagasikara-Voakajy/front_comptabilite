import { createAsyncThunk } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { axios } from "../../../../axios";
import { JournalItem } from "../journalSlice.interface";
/**
 * update a journal 
 * @param data : { id: string, journal: JournalItem } : the id of the journal to update and the journal data
 * @param thunkAPI
 * @returns {Promise<void>}
 * @memberof useCases
 * @description : This function is used to update a journal
 */
export const updateJournal = createAsyncThunk(
	"journal/updateJournal",
	async (data: { id: string; journal: JournalItem }, thunkAPI) => {
		try {
			const response = await axios.patch(
				`/compta/journal/${data.id}`,
				data.journal
			);
			thunkAPI.dispatch(
				enqueueSnackbar({
					message: "Journal updated successfully",
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
