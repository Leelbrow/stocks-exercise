import Head from "next/head";
import { FC, JSX } from "react";
import { Layout } from "../../../../layout";

const SearchPage: FC = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Stocks - Search</title>
      </Head>

      <Layout>
        <main></main>
      </Layout>
    </>
  );
};

export default SearchPage;
