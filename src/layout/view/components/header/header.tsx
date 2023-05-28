import clsx from "clsx";
import { FC, JSX } from "react";
import { PropsWithClassName } from "../../../../_shared/types";
import styles from "./header.module.scss";

const Header: FC<PropsWithClassName> = ({ className }): JSX.Element => {
  return (
    <header className={clsx(styles.container, className)}>
      <h1 className={styles.title}>Stocks</h1>
    </header>
  );
};

export default Header;
