import { ChangeEvent, FC, JSX, useCallback } from "react";
import styles from "./search-bar.module.scss";

type SearchBarProps = {
  readonly value: string;
  readonly onChange: (value: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ value, onChange }): JSX.Element => {
  const handleInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.currentTarget.value);
    },
    [onChange]
  );

  return (
    <div className={styles.container}>
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
