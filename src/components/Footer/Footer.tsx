import React from "react";
import { FooterContactForm } from "./FooterContactForm";
import { FooterColumns } from "./FooterColumns";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterContactForm />
      <FooterColumns />
      <div className="container">
        <p>© 2013 Peach. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export { Footer };
