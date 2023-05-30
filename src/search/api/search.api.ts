import { apiKey } from "../../_shared/constants";
import { List } from "../../_shared/types/general.types";
import { SimpleStock } from "../../_shared/types/model.types";
import JsonStorage from "../../_shared/utils/json-storage";
import {
  SearchResult,
  SearchResultDto,
  SimpleStockDto,
} from "./search.api.types";

const localStorageKey = "search-results";

export const fetchSearchResults = (
  searchTerm: string
): Promise<SearchResult> => {
  if (isFetchNeeded(searchTerm)) {
    return fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=${apiKey}`
    )
      .then((response): Promise<SearchResultDto> => response.json())
      .then(mapResult)
      .then(cacheResult(searchTerm));
  } else {
    return Promise.resolve(getCachedResult(searchTerm));
  }
};

const isFetchNeeded = (searchTerm: string): boolean => {
  const cachedResult = JsonStorage.get<List<SimpleStock>>([
    localStorageKey,
    searchTerm,
  ]);

  return cachedResult === null;
};

const getCachedResult = (searchTerm: string): SearchResult => {
  const cachedResult = JsonStorage.get<SearchResult>([
    localStorageKey,
    searchTerm,
  ]);

  if (cachedResult === null) {
    throw new Error("cached result is unexpectedly null");
  }

  return cachedResult;
};

const cacheResult =
  (searchTerm: string) =>
  (result: List<SimpleStock>): List<SimpleStock> => {
    JsonStorage.set([localStorageKey, searchTerm], result);
    return result;
  };

const mapResult = (dto: SearchResultDto): SearchResult =>
  dto.bestMatches.map(mapItem);

const mapItem = (dto: SimpleStockDto): SimpleStock => ({
  symbol: dto["1. symbol"],
  name: dto["2. name"],
});
