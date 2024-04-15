import React from "react";
import { Title } from "../Title/Title";
import { ColumnsList } from "../Columns/ColumnsList";
import { Column } from "../../types/ColumnData";
import styles from "./AboutList.module.scss";

type AboutDataProp = {
  data: Column[];
};

const AboutList = ({ data }: AboutDataProp) => {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <Title>About</Title>
        <ColumnsList data={data} line={false} />
      </div>
    </section>
  );
};

export { AboutList };
