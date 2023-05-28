export const formatAsUsd = (number: number): string =>
  UsdFormatter.format(number);

const UsdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
