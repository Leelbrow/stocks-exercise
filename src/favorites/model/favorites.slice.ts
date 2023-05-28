import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { List } from "../../_shared/types/general.types";
import { SimpleStock } from "../../_shared/types/model.types";
import JsonStorage from "../../_shared/utils/json-storage";

export type FavoritesState = {
  items: List<SimpleStock>;
};

const initialState: FavoritesState = {
  items: [],
};

export const saveFavoritesToStorage = (favorites: List<SimpleStock>) => {
  JsonStorage.set(["favorites"], favorites);
};

export const loadFavoritesFromStorage = createAction("favorites/load", () => {
  const favorites = JsonStorage.get<List<SimpleStock>>(["favorites"]) ?? [];
  return { payload: favorites };
});

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<SimpleStock>) {
      state.items.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<string>) {
      const index = state.items.findIndex(
        (item) => item.symbol === action.payload
      );
      state.items.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(loadFavoritesFromStorage, (state, action) => ({
      ...state,
      items: action.payload,
    }));
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice;
