import { createSlice } from "@reduxjs/toolkit";
import { createGrant } from "./useCase/createGrant";
import { deleteGrant } from "./useCase/deleteGrant";
import { editGrant } from "./useCase/editGrant";
import { getGrant } from "./useCase/getGrant";
import { getGrantList } from "./useCase/getGrantListe";
import { updateGrant } from "./useCase/updateGrant";
import { GrantInitialState } from "./grant.interface";

const initialState: GrantInitialState = {
  grantList: [],
  grant: {},
  isEditing: false,
  loading: false,
  error: null,
};

export const grantSlice = createSlice({
  name: "grant",
  initialState,
  reducers: {
    cancelEdit: (state) => {
      state.isEditing = false;
      state.grant = {};
    },
  },
  extraReducers: {
    [getGrant.pending.type]: (state) => {
      state.loading = true;
    },
    [getGrant.fulfilled.type]: (state, action) => {
      state.grant = action.payload;
      state.loading = false;
    },
    [getGrant.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [getGrantList.pending.type]: (state) => {
      state.loading = true;
    },
    [getGrantList.fulfilled.type]: (state, action) => {
      state.grantList = action.payload;
      state.loading = false;
    },
    [getGrantList.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [createGrant.pending.type]: (state) => {
      state.loading = true;
    },
    [createGrant.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [createGrant.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [updateGrant.pending.type]: (state) => {
      state.loading = true;
    },
    [updateGrant.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.isEditing = false;
      state.grant = {};
    },
    [updateGrant.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [deleteGrant.pending.type]: (state) => {
      state.loading = true;
    },
    [deleteGrant.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [deleteGrant.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [editGrant.pending.type]: (state) => {
      state.loading = true;
    },
    [editGrant.fulfilled.type]: (state, action) => {
      state.grant = action.payload;
      state.loading = false;
      state.isEditing = true;
    },
    [editGrant.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export const { cancelEdit } = grantSlice.actions;
