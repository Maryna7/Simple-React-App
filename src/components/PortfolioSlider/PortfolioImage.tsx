import React from "react";
import { Link } from "../Link/Link";
import { Image } from "../../types/PortfolioData";
import styles from "./PortfolioSlider.module.scss";

const PortfolioImage = ({ imgUrl, imgAlt, href }: Image) => {
  return (
    <Link className={styles.portfolioLink} href={href}>
      <img src={imgUrl} alt={imgAlt} />
      <div className={styles.linkHover}>
        <div className={styles.hoverTextWrap}>
          <span className={styles.hoverText}>View all</span>
        </div>
      </div>
    </Link>
  );
};

export { PortfolioImage };
