import clsx from "clsx";
import Link from "next/link";
import { FC, JSX } from "react";
import { PropsWithClassName } from "../../../../types/general.types";
import styles from "./header.module.scss";

const Header: FC<PropsWithClassName> = ({ className }): JSX.Element => {
  return (
    <header className={clsx(styles.container, className)}>
      <h1 className={styles.title}>
        <Link href="/">Stocks</Link>
      </h1>

      <nav className={styles.menu}>
        <Link className={styles.menuItem} href="/favorites">
          Favorites
        </Link>
      </nav>
    </header>
  );
};

export default Header;
