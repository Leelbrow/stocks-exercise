import { render } from "@testing-library/react";
import StockCard from "./stock-card";

describe(`${StockCard.name}`, () => {
  const symbol = "ABC";

  const renderStockQuoteCard = () =>
    render(<StockCard symbol={symbol} name="Lorem Ipsum" />);

  test("renders", () => {
    expect(renderStockQuoteCard()).toMatchSnapshot();
  });
});
