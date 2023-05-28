import { apiKey } from "../../constants";
import { SearchItem } from "../search.types";
import {
  SearchItemDto,
  SearchResult,
  SearchResultDto,
} from "./search.api.types";

export const fetchSearchResults = (searchTerm: string): Promise<SearchResult> =>
  fetch(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=${apiKey}`
  )
    .then((response): Promise<SearchResultDto> => response.json())
    .then(mapResult);

const mapResult = (dto: SearchResultDto): SearchResult =>
  dto.bestMatches.map(mapItem);

const mapItem = (dto: SearchItemDto): SearchItem => ({
  symbol: dto["1. symbol"],
  name: dto["2. name"],
});
