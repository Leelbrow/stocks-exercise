import { FC, JSX } from "react";
import { formatAsUsd } from "../../../../_shared/utils/format-as-usd";
import { StockPrices } from "../../../details.types";
import styles from "./price-table.module.scss";

type PriceTableProps = {
  readonly prices: StockPrices;
};

const PriceTable: FC<PriceTableProps> = ({ prices }): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>Opening price</div>
      <div className={styles.value}>{formatAsUsd(prices.open)}</div>
      <div className={styles.label}>Closing price</div>
      <div className={styles.value}>{formatAsUsd(prices.close)}</div>
      <div className={styles.label}>Highest price</div>
      <div className={styles.value}>{formatAsUsd(prices.high)}</div>
      <div className={styles.label}>Lowest price</div>
      <div className={styles.value}>{formatAsUsd(prices.low)}</div>
      <div className={styles.label}>Volume</div>
      <div className={styles.value}>{formatAsUsd(prices.volume)}</div>
    </div>
  );
};

export default PriceTable;
