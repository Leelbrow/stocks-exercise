import { FC } from "react";
import { Toaster } from "react-hot-toast";
import { useFavoritePersistence } from "../src/favorites/model/use-favorites-persistence.hook";
import "../src/globals.scss";
import { nextReduxWrapper } from "../src/store";
import { Montserrat } from "next/font/google";

type AppProps = { readonly Component: FC; readonly pageProps: object };

const font = Montserrat({ subsets: ["latin"] });

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useFavoritePersistence();

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
      <Toaster />
    </>
  );
};

export default nextReduxWrapper.withRedux(App);
