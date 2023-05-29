import Link from "next/link";
import { FC, MouseEventHandler, useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../../favorites/model/favorites.selectors";
import {
  addFavorite,
  removeFavorite,
} from "../../../favorites/model/favorites.slice";
import styles from "./stock-card.module.scss";

type StockCardProps = {
  readonly symbol: string;
  readonly name: string;
};

const StockCard: FC<StockCardProps> = ({ symbol, name }) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const isFavorite = useMemo(() => {
    return Boolean(favorites.find((favorite) => favorite.symbol === symbol));
  }, [favorites, symbol]);

  const handleFavoritesButtonClick: MouseEventHandler<HTMLButtonElement> =
    useCallback(
      (event) => {
        event.preventDefault();

        if (!isFavorite) {
          dispatch(addFavorite({ symbol, name }));
          toast.success("Favorite added!");
        } else {
          dispatch(removeFavorite(symbol));
          toast.success("Favorite removed!");
        }
      },
      [dispatch, isFavorite, symbol, name]
    );

  return (
    <div className={styles.container}>
      <Link className={styles.link} href={`details/${symbol}`}>
        <div className={styles.symbol}>{symbol}</div>

        <div className={styles.name}>{name}</div>

        <button
          className={styles.favoritesButton}
          onClick={handleFavoritesButtonClick}
        >
          {!isFavorite ? (
            <AiOutlineStar className={styles.favoritesIcon} />
          ) : (
            <AiFillStar className={styles.favoritesIcon} />
          )}
        </button>
      </Link>
    </div>
  );
};

export default StockCard;
