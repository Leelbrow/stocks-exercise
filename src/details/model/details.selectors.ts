import { AppState } from "../../store";

export const selectDetails = (state: AppState) => state.details.data;

export const selectLoadingStatus = (state: AppState) =>
  state.details.loadingStatus;

export const selectError = (state: AppState) => state.details.error;
