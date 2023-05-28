import { FC, JSX } from "react";
import { useSelector } from "react-redux";
import Placeholder from "../../../../_shared/components/placeholder/placeholder";
import StockList from "../../../../_shared/components/stock-list/stock-list";
import { Layout } from "../../../../layout";
import { selectFavorites } from "../../../model/favorites.selectors";
import styles from "./favorites-page.module.scss";

const FavoritesPage: FC = (): JSX.Element => {
  const items = useSelector(selectFavorites);

  return (
    <Layout>
      <main className={styles.container}>
        {items.length > 0 ? (
          <StockList items={items} />
        ) : (
          <Placeholder text="No favorites yet. You can save them on the search page." />
        )}
      </main>
    </Layout>
  );
};

export default FavoritesPage;
