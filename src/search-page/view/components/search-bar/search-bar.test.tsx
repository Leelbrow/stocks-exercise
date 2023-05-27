import "@testing-library/jest-dom";
import SearchBar from "./search-bar";
import { fireEvent, render } from "@testing-library/react";

describe(`${SearchBar.name}`, () => {
  const value = "value";
  let onChange: jest.Mock;

  const renderSearchBar = () =>
    render(<SearchBar value={value} onChange={onChange} />);

  const getInputElement = () => renderSearchBar().getByRole("textbox");

  beforeEach(() => {
    onChange = jest.fn();
  });

  test("renders", () => {
    expect(renderSearchBar()).toMatchSnapshot();
  });

  test("has the value in provided in prop", () => {
    expect(getInputElement()).toHaveValue(value);
  });

  test("emits an onChange event on input", () => {
    const inputElement = getInputElement();
    const value2 = "value2";
    fireEvent.input(inputElement, { target: { value: value2 } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(value2);
  });
});
