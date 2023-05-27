import Head from "next/head";
import styles from "./search-page.module.scss";
import { FC } from "react";

const SearchPage: FC<Record<string, never>> = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stocks - Search</title>
      </Head>
    </div>
  );
};

export default SearchPage;
