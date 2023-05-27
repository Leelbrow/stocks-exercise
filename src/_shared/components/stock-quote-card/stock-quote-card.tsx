import { FC, useCallback } from "react";
import styles from "./stock-quote-card.module.scss";

type StockQuoteCardProps = {
  readonly symbol: string;
  readonly name: string;
  readonly onClick: (symbol: string) => void;
};

const StockQuoteCard: FC<StockQuoteCardProps> = ({ symbol, name, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(symbol);
  }, [symbol, onClick]);

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.symbol}>{symbol}</div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};

export default StockQuoteCard;
