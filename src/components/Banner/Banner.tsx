import React from "react";
import { Link } from "../Link/Link";
import { BannerSlide } from "../../types/BannerData";
import styles from "./Banner.module.scss";

type BanerDataProp = {
  data: BannerSlide[];
};

const Banner = ({ data }: BanerDataProp) => {
  return (
    <section className={styles.bannerSection}>
      {data.map((item) => (
        <div
          key={item.id}
          className={styles.bannerSlide}
          style={{ backgroundImage: item.image }}
        >
          <div className={styles.container}>
            <div className={styles.textWrap}>
              {item.text.map((paragraph) => (
                <p className={styles.bannerText}>{paragraph}</p>
              ))}
            </div>
            <Link href={item.linkUrl} className={styles.bannerButton}>
              {item.linkText}
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export { Banner };
