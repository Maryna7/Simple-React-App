/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./Banner.module.scss";
import { Link } from "../Link/Link";

const Banner: React.FC = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <div className={styles.textWrap}>
          <p className={styles.bannerText}>Website Redesign </p>
          <p className={styles.bannerText}>
            From minor repairs to complete renovation sites transfer from any
            platform by WordPress.
          </p>
        </div>
        <Link href="#" className={styles.bannerButton}>
          Learn more
        </Link>
      </div>
    </section>
  );
};

export { Banner };
