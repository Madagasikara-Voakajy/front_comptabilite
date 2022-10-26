import { createAsyncThunk } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "../../notification/notificationSlice";
import { axios } from "../../../../axios";
import { JournalEntryItem } from "../JournalEntrySlice.interface";
/**
 * update a journalEntry 
 * @param data : { id: string, journalEntry: JournalEntryItem } : the id of the fiscal to update and the journalEntry data
 * @param thunkAPI
 * @returns {Promise<void>}
 * @memberof useCases
 * @description : This function is used to update a journalEntry
 */
export const updateJournalEntry = createAsyncThunk(
	"journalEntry/updateJournalEntry",
	async (data: { id: string; journalEntry: JournalEntryItem }, thunkAPI) => {
		try {
			const response = await axios.patch(
				`/compta/journal-entry/${data.id}`,
				data.journalEntry
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
