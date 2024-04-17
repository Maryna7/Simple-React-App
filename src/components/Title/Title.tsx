import React from "react";
import styles from "./Title.module.scss";

type TitleProp = {
  children: React.ReactNode;
};

const Title = ({ children }: TitleProp) => {
  return (
    <h2 className={styles.h2}>
      <span>{children}</span>
    </h2>
  );
};

export { Title };
