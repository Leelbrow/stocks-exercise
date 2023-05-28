import { AppState } from "../../store";

export const selectFavorites = (state: AppState) => state.favorites.items;
