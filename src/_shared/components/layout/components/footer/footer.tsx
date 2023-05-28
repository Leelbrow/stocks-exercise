import clsx from "clsx";
import { FC, JSX } from "react";
import { PropsWithClassName } from "../../../../_shared/types/general.types";
import styles from "./footer.module.scss";

const Footer: FC<PropsWithClassName> = ({ className }): JSX.Element => {
  return <footer className={clsx(styles.container, className)}></footer>;
};

export default Footer;
