import { FC } from "react";
import { Toaster } from "react-hot-toast";
import { useFavoritePersistence } from "../src/favorites/model/use-favorites-persistence.hook";
import "../src/globals.scss";
import { nextReduxWrapper } from "../src/store";

type AppProps = { readonly Component: FC; readonly pageProps: object };

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useFavoritePersistence();

  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
};

export default nextReduxWrapper.withRedux(App);
