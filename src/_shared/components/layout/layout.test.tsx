import { render } from "@testing-library/react";
import Layout from "./layout";

describe("Layout", () => {
  test("renders", () => {
    expect(
      render(
        <Layout>
          <div>children</div>
        </Layout>
      )
    ).toMatchSnapshot();
  });
});
