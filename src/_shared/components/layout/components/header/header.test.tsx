import Header from "./header";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { testAcceptsExternalClassName } from "../../../../tests/test-accepts-external-classname";

describe(`${Header.name}`, () => {
  test("renders", () => {
    expect(render(<Header />)).toMatchSnapshot();
  });

  testAcceptsExternalClassName(Header, {});
});
