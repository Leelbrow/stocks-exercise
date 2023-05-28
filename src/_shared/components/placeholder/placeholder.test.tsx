import { render } from "@testing-library/react";
import Placeholder from "./placeholder";

describe(`${Placeholder.name}`, () => {
  test("renders", () => {
    expect(render(<Placeholder text="text" />)).toMatchSnapshot();
  });
});
