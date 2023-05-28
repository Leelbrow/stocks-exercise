import { ChangeEvent, FC, JSX, useCallback } from "react";
import styles from "./search-bar.module.scss";
import { PropsWithClassName } from "../../../_shared/types/general.types";
import clsx from "clsx";

type SearchBarProps = PropsWithClassName<{
  readonly value: string;
  readonly onInput: (value: string) => void;
}>;

const SearchBar: FC<SearchBarProps> = ({
  value,
  className,
  onInput,
}): JSX.Element => {
  const handleInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onInput(event.currentTarget.value);
    },
    [onInput]
  );

  return (
    <div className={clsx(styles.container, className)}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onInput={handleInput}
      />
    </div>
  );
};

export default SearchBar;
