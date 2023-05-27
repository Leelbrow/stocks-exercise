import SearchPage from "./search-page";
import { render } from "@testing-library/react";

describe(`${SearchPage.name}`, () => {
  test("renders", () => {
    expect(render(<SearchPage />)).toMatchSnapshot();
  });
});
