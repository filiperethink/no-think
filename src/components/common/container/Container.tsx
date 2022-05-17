import React from "react";
import styles from "./Container.module.css";

type TypeContainer = { children: React.ReactNode };

function Container({ children }: TypeContainer) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;
