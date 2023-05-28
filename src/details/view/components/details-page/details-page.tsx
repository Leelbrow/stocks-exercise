import Head from "next/head";
import { useRouter } from "next/router";
import { FC, JSX, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../../../../layout";
import { AppDispatch } from "../../../../store";
import {
  selectDetails,
  selectError,
  selectLoadingStatus,
} from "../../../model/details.selectors";
import { getDetails } from "../../../model/details.slice";
import styles from "./details-page.module.scss";
import Placeholder from "../../../../_shared/components/placeholder/placeholder";

const DetailsPage: FC = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const details = useSelector(selectDetails);
  const loadingStatus = useSelector(selectLoadingStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    const symbol = router.query.symbol as string | undefined;
    if (symbol) dispatch(getDetails(symbol));
  }, [dispatch, router]);

  const getPlaceholderText = () => {
    switch (loadingStatus) {
      case "idle":
        return "";
      case "loading":
        return "Loading";
      case "error":
        return `Error: ${error}`;
      default:
        return "";
    }
  };

  return (
    <>
      <Head>
        <title>Stocks - Details</title>
      </Head>

      <Layout>
        <main className={styles.container}>
          {loadingStatus === "success" && (
            <>
              <h2>{details?.symbol}</h2>
            </>
          )}

          {loadingStatus !== "success" && (
            <Placeholder text={getPlaceholderText()} />
          )}
        </main>
      </Layout>
    </>
  );
};

export default DetailsPage;