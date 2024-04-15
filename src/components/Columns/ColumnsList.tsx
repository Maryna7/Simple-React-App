import React from "react";
import { ColumnsIcon } from "./ColumnsIcon";
import { ColumnsTitle } from "./ColumnsTitle";
import { ColumnsText } from "./ColumnsText";
import { Column } from "../../types/ColumnData";
import styles from "./ColumnsList.module.scss";

type ColumnProps = {
  data: Column[];
  line: boolean;
};

function ColumnsList({ data, line }: ColumnProps) {
  return (
    <ul className={styles.articlesColumns}>
      {data.map((item: Column) => (
        <li
          key={item.id}
          className={`${styles.article} ${line ? "" : styles.hidePseudo}`}
        >
          <ColumnsIcon>{item.icon}</ColumnsIcon>
          <ColumnsTitle>{item.heading}</ColumnsTitle>
          <ColumnsText paragraphs={item.text} />
        </li>
      ))}
    </ul>
  );
}

export { ColumnsList };
