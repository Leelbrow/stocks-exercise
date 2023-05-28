import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoadingStatus } from "../../_shared/types/general.types";
import { fetchDetails } from "../api/details.api";
import { StockDetails } from "../details.types";

export type DetailsState = {
  data: StockDetails | null;
  loadingStatus: LoadingStatus;
  error: string | null;
};

const initialState: DetailsState = {
  data: null,
  loadingStatus: "idle",
  error: null,
};

export const getDetails = createAsyncThunk("details/getDetails", fetchDetails);

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getDetails.pending, (state) => ({
        ...state,
        loadingStatus: "loading",
        error: null,
      }))
      .addCase(getDetails.fulfilled, (state, action) => ({
        ...state,
        data: action.payload,
        loadingStatus: "success",
      }))
      .addCase(getDetails.rejected, (state, action) => ({
        ...state,
        loadingStatus: "error",
        error: action.error.message ?? "Ismeretlen hiba",
      }));
  },
});

export default detailsSlice;
