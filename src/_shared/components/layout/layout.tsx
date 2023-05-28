import clsx from "clsx";
import { FC, JSX, ReactElement, cloneElement } from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import styles from "./layout.module.scss";

type LayoutProps = {
  readonly children: ReactElement<JSX.IntrinsicElements["main"]>;
};

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />

      {cloneElement(children, {
        className: clsx(children.props.className, styles.mainContent),
      })}

      <Footer className={styles.footer} />
    </div>
  );
};

export default Layout;
