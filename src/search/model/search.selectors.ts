import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../../store";

export const selectResults = (state: AppState) => state.search.results;

export const selectLoadingStatus = (state: AppState) =>
  state.search.loadingStatus;

export const selectError = (state: AppState) => state.search.error;

export const selectCanShowResults = createSelector(
  [selectResults, selectLoadingStatus],
  (results, loadingstatus) =>
    loadingstatus === "success" && (results?.length ?? 0) > 0
);
