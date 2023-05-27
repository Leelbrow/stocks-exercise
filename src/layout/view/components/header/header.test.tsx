import { testAcceptsExternalClassName } from "../../../../_shared/tests/test-accepts-external-classname";
import Header from "./header";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe(`${Header.name}`, () => {
  test("renders", () => {
    expect(render(<Header />)).toMatchSnapshot();
  });

  testAcceptsExternalClassName(Header);
});
