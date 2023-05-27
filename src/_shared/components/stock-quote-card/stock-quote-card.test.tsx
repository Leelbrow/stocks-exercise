import { fireEvent, render } from "@testing-library/react";
import StockQuoteCard from "./stock-quote-card";

describe(`${StockQuoteCard.name}`, () => {
  const symbol = "ABC";
  let onClick: jest.Mock;

  const renderStockQuoteCard = () =>
    render(
      <StockQuoteCard symbol={symbol} name="Lorem Ipsum" onClick={onClick} />
    );

  beforeEach(() => {
    onClick = jest.fn();
  });

  test("renders", () => {
    expect(renderStockQuoteCard()).toMatchSnapshot();
  });

  test("emits an onClick event with it's symbol when clicked", () => {
    const element = renderStockQuoteCard().container.firstChild as ChildNode;
    fireEvent.click(element);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(symbol);
  });
});
