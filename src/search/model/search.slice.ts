import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { List, LoadingStatus } from "../../_shared/types";
import { fetchSearchResults } from "../api/search.api";
import { SimpleStock } from "../search.types";

export type SearchState = {
  results: List<SimpleStock> | null;
  loadingStatus: LoadingStatus;
  error: string | null;
};

const initialState: SearchState = {
  results: null,
  loadingStatus: "idle",
  error: null,
};

export const search = createAsyncThunk("search/search", fetchSearchResults);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(search.pending, (state) => ({
        ...state,
        loadingStatus: "loading",
        error: null,
      }))
      .addCase(search.fulfilled, (state, action) => ({
        ...state,
        results: action.payload,
        loadingStatus: "success",
      }))
      .addCase(search.rejected, (state, action) => ({
        ...state,
        loadingStatus: "error",
        error: action.error.message ?? "Ismeretlen hiba",
      }));
  },
});

export default searchSlice;
