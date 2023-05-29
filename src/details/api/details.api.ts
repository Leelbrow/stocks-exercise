import { apiKey } from "../../_shared/constants";
import { StockDetails, StockPrices } from "../../_shared/types/model.types";
import { StockDetailsDto, StockPricesDto } from "./details.api.types";

export const fetchDetails = (symbol: string): Promise<StockDetails> => {
  return fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}`
  )
    .then((response): Promise<StockDetailsDto> => response.json())
    .then(mapResult);
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
