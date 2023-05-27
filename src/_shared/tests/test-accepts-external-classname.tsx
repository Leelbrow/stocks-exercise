import { render } from "@testing-library/react";
import { FC } from "react";
import { PropsWithClassName } from "../types/general.types";

export const testAcceptsExternalClassName = (
  Component: FC<PropsWithClassName>
) =>
  describe("if a className prop is passed into it", () => {
    test("puts the classname to its footer element", () => {
      const className = "classname";
      const containerElement = render(<Component className={className} />)
        .container.firstChild;
      expect(containerElement).toHaveClass(className);
    });
  });
