import { getDetails } from "../../src/details/model/details.slice";
import { nextReduxWrapper } from "../../src/store";

export { DetailsPage as default } from "../../src/details";

export const getServerSideProps = nextReduxWrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      store.dispatch(getDetails(params?.["symbol"] as string));

      await new Promise((resolve) => {
        const resolveIfLoadingFinished = () => {
          const { loadingStatus } = store.getState().details;
          if (loadingStatus !== "loading") resolve(undefined);
        };
        store.subscribe(resolveIfLoadingFinished);
      });

      return { props: {} };
    }
);
