import FavoritesPage from "./favorites-page";
import { render } from "@testing-library/react";

describe(`${FavoritesPage.name}`, () => {
  test("renders", () => {
    expect(render(<FavoritesPage />)).toMatchSnapshot();
  });
});
