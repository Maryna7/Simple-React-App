/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Icons } from "../Icons/Icons";
import { Title } from "../Title/Title";
import { PortfolioImage } from "./PortfolioImage";
import { PortfolioItem } from "../../types/PortfolioData";
import styles from "./PortfolioSlider.module.scss";

type PortfolioDataProp = {
  data: PortfolioItem[];
};

const PortfolioSlider = ({ data }: PortfolioDataProp) => {
  return (
    <section className={styles.portfolioSection}>
      <Title>LATEST PHOTOS</Title>
      <div className={styles.sliderWrap}>
        <button className={styles.sliderArrowLeft}>{Icons.chevronLeft}</button>
        <ul className={styles.portfolioList}>
          {data.map((item) => (
            <li className={styles.portfolioItem} key={item.id}>
              {item.imgList.map((img, index) =>
                item.imgList.length === 3 && (index === 1 || index === 2) ? (
                  <div key={index} className={styles.portfolioLinkWrap}>
                    <PortfolioImage
                      imgUrl={img.imgUrl}
                      imgAlt={img.imgAlt}
                      href={img.href}
                    />
                  </div>
                ) : (
                  <PortfolioImage
                    imgUrl={img.imgUrl}
                    imgAlt={img.imgAlt}
                    href={img.href}
                  />
                )
              )}
            </li>
          ))}
        </ul>
        <button className={styles.sliderArrowRight}>
          {Icons.chevronRight}
        </button>
      </div>
    </section>
  );
};

export { PortfolioSlider };
