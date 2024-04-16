import React from "react";
import { Title } from "../Title/Title";
import { ColumnsList } from "../Columns/ColumnsList";
import { AboutColumn } from "../../types/AboutData";
import styles from "./AboutList.module.scss";

type AboutDataProp = {
  data: AboutColumn[];
};

const AboutList = ({ data }: AboutDataProp) => {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <Title>About</Title>
        <ColumnsList data={data} line={false} headingsNum={true} />
      </div>
    </section>
  );
};

export { AboutList };
