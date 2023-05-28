import { List } from "../../_shared/types/general.types";
import { SimpleStock } from "../../_shared/types/model.types";

export type SearchResult = List<SimpleStock>;

export type SearchResultDto = {
  readonly bestMatches: List<SimpleStockDto>;
};

export type SimpleStockDto = {
  "1. symbol": string;
  "2. name": string;
};
