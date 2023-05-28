import { FC } from "react";
import { useFavoritePersistence } from "../src/favorites/model/use-favorites-persistence.hook";
import "../src/globals.scss";
import { nextReduxWrapper } from "../src/store";
import { Toaster } from "react-hot-toast";

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
