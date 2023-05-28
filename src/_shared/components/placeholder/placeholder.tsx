import { FC } from "react";
import styles from "./placeholder.module.scss";

type PlaceholderProps = {
  readonly text: string;
};

const Placeholder: FC<PlaceholderProps> = ({ text }) => {
  return <div className={styles.container}>{text}</div>;
};

export default Placeholder;
