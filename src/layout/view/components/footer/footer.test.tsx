import Footer from "./footer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { testAcceptsExternalClassName } from "../../../../_shared/tests/test-accepts-external-classname";

describe(`${Footer.name}`, () => {
  test("renders", () => {
    expect(render(<Footer />)).toMatchSnapshot();
  });

  testAcceptsExternalClassName(Footer);
});
