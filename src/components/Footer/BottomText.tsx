import React from "react";
import styles from "./Footer.module.scss";

type FooterTextProp = {
  data: string;
};

const BottomText = ({ data }: FooterTextProp) => {
  return <p className={styles.bottomText}>{data}</p>;
};

export { BottomText };
