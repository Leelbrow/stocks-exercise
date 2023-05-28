import { List } from "../../_shared/types";
import { SimpleStock } from "../search.types";

export type SearchResult = List<SimpleStock>;

export type SearchResultDto = {
  readonly bestMatches: List<SimpleStockDto>;
};

export type SimpleStockDto = {
  "1. symbol": string;
  "2. name": string;
};
