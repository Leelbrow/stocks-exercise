import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "../../_shared/types/general.types";
import { SimpleStock } from "../../_shared/types/model.types";
import { selectFavorites } from "./favorites.selectors";
import {
  loadFavoritesFromStorage,
  saveFavoritesToStorage,
} from "./favorites.slice";

export const useFavoritePersistence = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFavoritesFromStorage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const favorites = useSelector(selectFavorites);
  const favoritesRef = useRef<List<SimpleStock>>([]);

  useEffect(() => {
    favoritesRef.current = favorites;
  }, [favorites]);

  if (typeof window !== "undefined") {
    window.onbeforeunload = () => saveFavoritesToStorage(favoritesRef.current);
  }
};
