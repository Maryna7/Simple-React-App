import React from "react";
import styles from "./ColumnsList.module.scss";
import { ColumnIcons } from "../../types/ColumnData";

const ColumnsIcon = ({ children }: ColumnIcons) => {
  return <div className={styles.iconHolder}>{children}</div>;
};

export { ColumnsIcon };
