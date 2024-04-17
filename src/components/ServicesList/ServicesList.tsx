import React from "react";
import { Title } from "../Title/Title";
import { ColumnsList } from "../Columns/ColumnsList";
import { Service } from "../../types/ServicesData";
import styles from "./ServicesList.module.scss";

type ServicesDataProp = {
  data: Service[];
};

const ServicesList = ({ data }: ServicesDataProp) => {
  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <Title>SERVICES</Title>
        <ColumnsList data={data} line={true} headingsNum={false} />
      </div>
    </section>
  );
};

export { ServicesList };
