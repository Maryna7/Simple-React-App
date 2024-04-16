import React from "react";
import styles from "../AboutList/AboutList.module.scss";

type NumberProp = {
  children: React.ReactNode;
};

function ColumnsHeadingsNum({ children }: NumberProp) {
  return <p className={styles.headingsNumber}>{children}</p>;
}

export { ColumnsHeadingsNum };
