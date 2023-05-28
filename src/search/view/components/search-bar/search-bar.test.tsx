import "@testing-library/jest-dom";
import SearchBar from "./search-bar";
import { fireEvent, render } from "@testing-library/react";
import { testAcceptsExternalClassName } from "../../../../_shared/tests/test-accepts-external-classname";

describe(`${SearchBar.name}`, () => {
  const value = "value";
  let onInput: jest.Mock;

  const renderSearchBar = () =>
    render(<SearchBar value={value} onInput={onInput} />);

  const getInputElement = () => renderSearchBar().getByRole("textbox");

  beforeEach(() => {
    onInput = jest.fn();
  });

  test("renders", () => {
    expect(renderSearchBar()).toMatchSnapshot();
  });

  test("has the value in provided in prop", () => {
    expect(getInputElement()).toHaveValue(value);
  });

  test("emits an onInput event on input", () => {
    const inputElement = getInputElement();
    const value2 = "value2";
    fireEvent.input(inputElement, { target: { value: value2 } });
    expect(onInput).toHaveBeenCalledTimes(1);
    expect(onInput).toHaveBeenCalledWith(value2);
  });

  testAcceptsExternalClassName(SearchBar, { value, onInput: () => null });
});
