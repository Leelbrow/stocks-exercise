export type StockDetailsDto = {
  "Meta Data": {
    "2. Symbol": string;
  };
  "Time Series (Daily)": Record<string, StockPricesDto>;
};

export type StockPricesDto = {
  readonly "1. open": string;
  readonly "4. close": string;
  readonly "2. high": string;
  readonly "3. low": string;
  readonly "6. volume": string;
};
