import React from "react";
import { Title } from "../Title/Title";
import { ColumnsList } from "../Columns/ColumnsList";
import { Column } from "../../types/ColumnData";
import styles from "./ServicesList.module.scss";

type ServicesDataProp = {
  data: Column[];
};

const ServicesList = ({ data }: ServicesDataProp) => {
  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <Title>SERVICES</Title>
        <ColumnsList data={data} line={true} />
      </div>
    </section>
  );
};

export { ServicesList };
