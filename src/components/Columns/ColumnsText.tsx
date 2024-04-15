import React from "react";
import styles from "./ColumnsList.module.scss";

type TextProp = {
  paragraphs: string[];
};

const ColumnsText = ({ paragraphs }: TextProp) => {
  return (
    <div className={styles.textHolder}>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export { ColumnsText };
