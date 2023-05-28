import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import searchSlice from "./search/model/search.slice";
import detailsSlice from "./details/model/details.slice";

const makeStore = () =>
  configureStore({
    reducer: {
      [searchSlice.name]: searchSlice.reducer,
      [detailsSlice.name]: detailsSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<AppStore["getState"]>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const nextReduxWrapper = createWrapper<AppStore>(makeStore);

export type AppDispatch = AppStore["dispatch"];
