import { FC } from "react";
import "../src/globals.scss";

type AppProps = { readonly Component: FC; readonly pageProps: object };

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
