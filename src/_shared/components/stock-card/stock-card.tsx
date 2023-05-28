import { FC } from "react";
import styles from "./stock-card.module.scss";

type StockQuoteCardProps = {
  readonly symbol: string;
  readonly name: string;
};

const StockCard: FC<StockQuoteCardProps> = ({ symbol, name }) => {
  return (
    <div className={styles.container}>
      <div className={styles.symbol}>{symbol}</div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};

export default StockCard;
