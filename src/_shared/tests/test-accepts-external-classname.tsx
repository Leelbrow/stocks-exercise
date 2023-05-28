import { render } from "@testing-library/react";
import { FC } from "react";
import { PropsWithClassName } from "../types";

export const testAcceptsExternalClassName = <Props extends PropsWithClassName>(
  Component: FC<Props>,
  props: Props
) =>
  describe("if a className prop is passed into it", () => {
    test("puts the classname to its footer element", () => {
      const className = "classname";
      const containerElement = render(<Component {...props} className={className} />)
        .container.firstChild;
      expect(containerElement).toHaveClass(className);
    });
  });
