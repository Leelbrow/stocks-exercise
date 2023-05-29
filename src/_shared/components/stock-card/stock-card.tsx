import Link from "next/link";
import { FC, useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../../favorites/model/favorites.selectors";
import { addFavorite } from "../../../favorites/model/favorites.slice";
import styles from "./stock-card.module.scss";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

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

  const handleFavoritesButtonClick = useCallback(() => {
    dispatch(addFavorite({ symbol, name }));
    toast.success("Favorite added!");
  }, [dispatch, symbol, name]);

  return (
    <div className={styles.container}>
      <Link href={`details/${symbol}`}>
        <div className={styles.symbol}>{symbol}</div>
      </Link>

      <div className={styles.name}>{name}</div>

      <button
        className={styles.favoritesButton}
        onClick={handleFavoritesButtonClick}
      >
        <AiOutlineStar className={styles.favoritesIcon} />
      </button>
    </div>
  );
};

export default StockCard;
