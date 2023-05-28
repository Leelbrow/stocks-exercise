import { render } from "@testing-library/react";
import StockCard from "./stock-card";

describe(`${StockCard.name}`, () => {
  test("renders", () => {
    expect(
      render(<StockCard symbol="SYM" name="Stock name" />)
    ).toMatchSnapshot();
  });
});
