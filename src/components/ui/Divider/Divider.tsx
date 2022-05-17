import React from "react";
import styles from "./Divider.module.css";

export default function Divider() {
  return (
    <div className={styles.dividers}>
      <div className={styles.divider}></div>
      <span className={styles.dividers_text}>ou</span>
      <div className={styles.divider}></div>
    </div>
  );
}
