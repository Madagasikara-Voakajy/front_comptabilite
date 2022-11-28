import { createSlice } from "@reduxjs/toolkit";
import { createPcg } from "./useCase/createPcg";
import { deletePcg } from "./useCase/deletePcg";
import { editPcg } from "./useCase/editPcg";
import { getPcg } from "./useCase/getPcg";
import { getPcgList } from "./useCase/getPcgListe";
import { updatePcg } from "./useCase/updatePcg";
import { PcgInitialState } from "./pcg.interface";

const initialState: PcgInitialState = {
  pcgList: [],
  pcg: {},
  isEditing: false,
  loading: false,
  error: null,
};

export const pcgSlice = createSlice({
  name: "pcg",
  initialState,
  reducers: {
    cancelEdit: (state) => {
      state.isEditing = false;
      state.pcg = {};
    },
  },
  extraReducers: {
    [getPcg.pending.type]: (state) => {
      state.loading = true;
    },
    [getPcg.fulfilled.type]: (state, action) => {
      state.pcg = action.payload;
      state.loading = false;
    },
    [getPcg.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [getPcgList.pending.type]: (state) => {
      state.loading = true;
    },
    [getPcgList.fulfilled.type]: (state, action) => {
      state.pcgList = action.payload;
      state.loading = false;
    },
    [getPcgList.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [createPcg.pending.type]: (state) => {
      state.loading = true;
    },
    [createPcg.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [createPcg.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [updatePcg.pending.type]: (state) => {
      state.loading = true;
    },
    [updatePcg.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.isEditing = false;
      state.pcg = {};
    },
    [updatePcg.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [deletePcg.pending.type]: (state) => {
      state.loading = true;
    },
    [deletePcg.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [deletePcg.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [editPcg.pending.type]: (state) => {
      state.loading = true;
    },
    [editPcg.fulfilled.type]: (state, action) => {
      state.pcg = action.payload;
      state.loading = false;
      state.isEditing = true;
    },
    [editPcg.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export const { cancelEdit } = pcgSlice.actions;
