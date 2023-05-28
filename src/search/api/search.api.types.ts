import { List } from "../../_shared/types";
import { SearchItem } from "../search.types";

export type SearchResult = List<SearchItem>;

export type SearchResultDto = {
  readonly bestMatches: List<SearchItemDto>;
};

export type SearchItemDto = {
  "1. symbol": string;
  "2. name": string;
};
