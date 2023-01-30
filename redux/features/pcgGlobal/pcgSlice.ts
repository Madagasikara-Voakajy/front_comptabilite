import { createSlice } from "@reduxjs/toolkit";
import { createPcgGlobal } from "./useCase/createPcgGlobal";
import { deletePcgGlobal } from "./useCase/deletePcgGlobal";
import { editPcgGlobal } from "./useCase/editPcgGlobal";
import { getPcgGlobal } from "./useCase/getPcgGlobal";
import { getPcgGlobalList } from "./useCase/getPcgGlobalList";
import { updatePcgGlobal } from "./useCase/updatePcgGlobal";
import { PcgGlobalInitialState } from "./pcg.interface";

const initialState: PcgGlobalInitialState = {
	pcgList: [],
	pcg: {},
	isEditing: false,
	loading: false,
	error: null,
};

export const pcgGlobalSlice = createSlice({
	name: "pcgGlobal",
	initialState,
	reducers: {
		cancelEdit: (state) => {
			state.isEditing = false;
			state.pcg = {};
		},
	},
	extraReducers: {
		[getPcgGlobal.pending.type]: (state) => {
			state.loading = true;
		},
		[getPcgGlobal.fulfilled.type]: (state, action) => {
			state.pcg = action.payload;
			state.loading = false;
		},
		[getPcgGlobal.rejected.type]: (state, action) => {
			state.error = action.error;
			state.loading = false;
		},
		[getPcgGlobalList.pending.type]: (state) => {
			state.loading = true;
		},
		[getPcgGlobalList.fulfilled.type]: (state, action) => {
			state.pcgList = action.payload;
			state.loading = false;
		},
		[getPcgGlobalList.rejected.type]: (state, action) => {
			state.error = action.error;
			state.loading = false;
		},
		[createPcgGlobal.pending.type]: (state) => {
			state.loading = true;
		},
		[createPcgGlobal.fulfilled.type]: (state, action) => {
			state.loading = false;
		},
		[createPcgGlobal.rejected.type]: (state, action) => {
			state.error = action.error;
			state.loading = false;
		},
		[updatePcgGlobal.pending.type]: (state) => {
			state.loading = true;
		},
		[updatePcgGlobal.fulfilled.type]: (state, action) => {
			state.loading = false;
			state.isEditing = false;
			state.pcg = {};
		},
		[updatePcgGlobal.rejected.type]: (state, action) => {
			state.error = action.error;
			state.loading = false;
		},
		[deletePcgGlobal.pending.type]: (state) => {
			state.loading = true;
		},
		[deletePcgGlobal.fulfilled.type]: (state, action) => {
			state.loading = false;
		},
		[deletePcgGlobal.rejected.type]: (state, action) => {
			state.error = action.error;
			state.loading = false;
		},
		[editPcgGlobal.pending.type]: (state) => {
			state.loading = true;
		},
		[editPcgGlobal.fulfilled.type]: (state, action) => {
			state.pcg = action.payload;
			state.loading = false;
			state.isEditing = true;
		},
		[editPcgGlobal.rejected.type]: (state, action) => {
			state.error = action.error;
			state.loading = false;
		},
	},
});

export const { cancelEdit } = pcgGlobalSlice.actions;
