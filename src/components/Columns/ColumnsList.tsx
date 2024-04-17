import React from "react";
import { ColumnsIcon } from "./ColumnsIcon";
import { ColumnsTitle } from "./ColumnsTitle";
import { ColumnsText } from "./ColumnsText";
import { Service } from "../../types/ServicesData";
import { AboutColumn } from "../../types/AboutData";
import { ColumnsHeadingsNum } from "./ColumnsHeadingsNum";
import styles from "./ColumnsList.module.scss";

type ColumnProps = {
  data: Service[] | AboutColumn[];
  line: boolean;
  headingsNum: boolean;
};

function ColumnsList({ data, line, headingsNum }: ColumnProps) {
  return (
    <ul className={styles.articlesColumns}>
      {data.map((item) => (
        <li
          key={item.id}
          className={`${styles.article} ${line ? "" : styles.hidePseudo}`}
        >
          <ColumnsIcon icon={item.icon} />
          <ColumnsTitle>
            {headingsNum ? (
              <ColumnsHeadingsNum>{item.headingsNumber}</ColumnsHeadingsNum>
            ) : null}
            {item.heading}
          </ColumnsTitle>
          <ColumnsText>{item.text}</ColumnsText>
        </li>
      ))}
    </ul>
  );
}

export { ColumnsList };
