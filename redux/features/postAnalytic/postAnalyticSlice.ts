import { createSlice } from "@reduxjs/toolkit";
import { createPostAnalytic } from "./useCase/createPostAnalytic";
import { deletePostAnalytic } from "./useCase/deletePostAnalytic";
import { editPostAnalytic } from "./useCase/editPostAnalytic";
import { getPostAnalytic } from "./useCase/getPostAnalytic";
import { getPostAnalyticList } from "./useCase/getPostAnalyticListe";
import { updatePostAnalytic } from "./useCase/updatePostAnalytic";
import { PostAnalyticInitialState } from "./postAnalytic.interface";

const initialState: PostAnalyticInitialState = {
  postAnalyticList: [],
  postAnalytic: {},
  isEditing: false,
  loading: false,
  error: null,
};

export const postAnalyticSlice = createSlice({
  name: "ppostAnalytic",
  initialState,
  reducers: {
    cancelEdit: (state) => {
      state.isEditing = false;
      state.postAnalytic = {};
    },
  },
  extraReducers: {
    [getPostAnalytic.pending.type]: (state) => {
      state.loading = true;
    },
    [getPostAnalytic.fulfilled.type]: (state, action) => {
      state.postAnalytic = action.payload;
      state.loading = false;
    },
    [getPostAnalytic.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [getPostAnalyticList.pending.type]: (state) => {
      state.loading = true;
    },
    [getPostAnalyticList.fulfilled.type]: (state, action) => {
      state.postAnalyticList = action.payload;
      state.loading = false;
    },
    [getPostAnalyticList.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [createPostAnalytic.pending.type]: (state) => {
      state.loading = true;
    },
    [createPostAnalytic.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [createPostAnalytic.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [updatePostAnalytic.pending.type]: (state) => {
      state.loading = true;
    },
    [updatePostAnalytic.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.isEditing = false;
      state.postAnalytic = {};
    },
    [updatePostAnalytic.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [deletePostAnalytic.pending.type]: (state) => {
      state.loading = true;
    },
    [deletePostAnalytic.fulfilled.type]: (state, action) => {
      state.loading = false;
    },
    [deletePostAnalytic.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [editPostAnalytic.pending.type]: (state) => {
      state.loading = true;
    },
    [editPostAnalytic.fulfilled.type]: (state, action) => {
      state.postAnalytic = action.payload;
      state.loading = false;
      state.isEditing = true;
    },
    [editPostAnalytic.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export const { cancelEdit } = postAnalyticSlice.actions;
