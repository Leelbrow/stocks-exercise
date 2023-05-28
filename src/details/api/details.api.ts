import { differenceInMinutes } from "date-fns";
import JsonStorage from "../../_shared/utils/json-storage";
import { apiKey } from "../../constants";
import { StockDetails, StockPrices } from "../details.types";
import { StockDetailsDto, StockPricesDto } from "./details.api.types";

const localStorageKeys = {
  lastFetchTime: "last-fetch-time",
  details: "details",
} as const;

export const fetchDetails = (symbol: string): Promise<StockDetails> => {
  if (isRefetchNeeded(symbol)) {
    return fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}`
    )
      .then((response): Promise<StockDetailsDto> => response.json())
      .then(mapResult)
      .then(cacheResult(symbol));
  } else {
    return Promise.resolve(getCachedResult(symbol));
  }
};

const isRefetchNeeded = (symbol: string): boolean => {
  const lastFetchTimestamp = JsonStorage.get<number>([
    localStorageKeys.lastFetchTime,
    symbol,
  ]);
  const cachedDetails = JsonStorage.get<StockDetails>([
    localStorageKeys.details,
    symbol,
  ]);

  if (!lastFetchTimestamp || !cachedDetails) return true;

  const now = new Date();
  const lastFetchTime = new Date(lastFetchTimestamp);
  return differenceInMinutes(now, lastFetchTime) > 1;
};

const getCachedResult = (symbol: string): StockDetails => {
  const result = JsonStorage.get<StockDetails>([
    localStorageKeys.details,
    symbol,
  ]);

  if (result === null) {
    throw new Error("cached result is unexpectedly null");
  }

  return result;
};

const cacheResult =
  (symbol: string) =>
  (result: StockDetails): StockDetails => {
    JsonStorage.set([localStorageKeys.lastFetchTime, symbol], Date.now());
    JsonStorage.set([localStorageKeys.details, symbol], result);
    return result;
  };

const mapResult = (dto: StockDetailsDto): StockDetails => {
  const symbol = dto["Meta Data"]["2. Symbol"];
  const priceHistory = Object.entries(dto["Time Series (Daily)"]).map(mapItem);
  priceHistory.sort((p1, p2) => {
    const d1 = new Date(p1.date);
    const d2 = new Date(p2.date);
    return d1.valueOf() - d2.valueOf();
  });
  return { symbol, priceHistory: priceHistory.slice(0, 20) };
};

const mapItem = ([dateString, pricesDto]: [
  string,
  StockPricesDto
]): StockPrices => ({
  date: dateString,
  open: Number(pricesDto["1. open"]),
  close: Number(pricesDto["4. close"]),
  high: Number(pricesDto["2. high"]),
  low: Number(pricesDto["3. low"]),
  volume: Number(pricesDto["6. volume"]),
});
