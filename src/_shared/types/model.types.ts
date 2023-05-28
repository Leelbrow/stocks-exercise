import { List } from "./general.types";

export type SimpleStock = {
  readonly symbol: string;
  readonly name: string;
};

export type StockDetails = {
  readonly symbol: string;
  readonly priceHistory: List<StockPrices>;
};

export type StockPrices = {
  readonly date: string;
  readonly open: number;
  readonly close: number;
  readonly high: number;
  readonly low: number;
  readonly volume: number;
};
