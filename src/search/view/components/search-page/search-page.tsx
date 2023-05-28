import Head from "next/head";
import { FC, JSX, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  filter,
} from "rxjs";
import Placeholder from "../../../../_shared/components/placeholder/placeholder";
import StockList from "../../../../_shared/components/stock-list/stock-list";
import { Layout } from "../../../../layout";
import { AppDispatch } from "../../../../store";
import {
  selectCanShowResults,
  selectError,
  selectLoadingStatus,
  selectResults,
} from "../../../model/search.selectors";
import { search } from "../../../model/search.slice";
import SearchBar from "../search-bar/search-bar";
import styles from "./search-page.module.scss";

const SearchPage: FC = (): JSX.Element => {
  const results = useSelector(selectResults);
  const loadingStatus = useSelector(selectLoadingStatus);
  const error = useSelector(selectError);
  const canShowResults = useSelector(selectCanShowResults);

  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const { searchTerm$, searchRequest$ } = useMemo(() => {
    const searchTerm$ = new BehaviorSubject("");
    const searchRequest$ = searchTerm$.pipe(
      debounceTime(500),
      filter(Boolean),
      distinctUntilChanged()
    );

    return { searchTerm$, searchRequest$ };
  }, []);

  useEffect(() => {
    const subscription = searchRequest$.subscribe((searchTerm) =>
      dispatch(search(searchTerm))
    );
    return () => subscription.unsubscribe();
  }, [dispatch, searchRequest$]);

  const handleInput = useCallback(
    (searchTerm: string) => {
      setSearchTerm(searchTerm);
      searchTerm$.next(searchTerm);
    },
    [searchTerm$]
  );

  const getPlaceholderText = () => {
    switch (loadingStatus) {
      case "idle":
        return "No results yet. Use the search bar.";
      case "loading":
        return "Loading";
      case "error":
        return `Error: ${error}`;
      case "success":
        return "No results found";
    }
  };

  return (
    <>
      <Head>
        <title>Stocks - Search</title>
      </Head>

      <Layout>
        <main className={styles.container}>
          <SearchBar value={searchTerm} onInput={handleInput} />
          {canShowResults && results ? (
            <StockList items={results} />
          ) : (
            <Placeholder text={getPlaceholderText()} />
          )}
        </main>
      </Layout>
    </>
  );
};

export default SearchPage;
