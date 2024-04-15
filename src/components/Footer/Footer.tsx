import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© 2013 Peach. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export { Footer };
