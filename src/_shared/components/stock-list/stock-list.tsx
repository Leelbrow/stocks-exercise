import { FC } from "react";
import { List } from "../../types/general.types";
import StockCard from "../stock-card/stock-card";
import styles from "./stock-list.module.scss";
import { SimpleStock } from "../../types/model.types";

type StockListProps = {
  readonly items: List<SimpleStock>;
};

const StockList: FC<StockListProps> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map(({ symbol, name }) => (
        <StockCard key={symbol} symbol={symbol} name={name} />
      ))}
    </div>
  );
};

export default StockList;
