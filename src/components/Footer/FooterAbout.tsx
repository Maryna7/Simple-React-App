import React from "react";
import styles from "./Footer.module.scss";

type FooterTextProp = {
  data: string;
};

const FooterAbout = ({ data }: FooterTextProp) => {
  return (
    <div className={styles.footerColumnItem}>
      <h4 className="h4">ABOUT PEACH</h4>
      <p>{data}</p>
    </div>
  );
};

export { FooterAbout };
