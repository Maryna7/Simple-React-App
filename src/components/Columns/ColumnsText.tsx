import React from "react";
import styles from "./ColumnsList.module.scss";

type TextProp = {
  children: React.ReactNode;
};

const ColumnsText = ({ children }: TextProp) => {
  return (
    <div className={styles.textHolder}>
      <p>{children}</p>
    </div>
  );
};

export { ColumnsText };
