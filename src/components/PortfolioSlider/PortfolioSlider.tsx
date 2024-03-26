/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./PortfolioSlider.module.scss";
import { Link } from "../Link/Link";
import { Icons } from "../Icons/Icons";

const PortfolioSlider = () => {
  return (
    <section className={styles.portfolioSection}>
      <h2 className="h2">
        <span>LATEST PHOTOS</span>
      </h2>
      <div className={styles.sliderWrap}>
        <button className={styles.sliderArrowLeft}>{Icons.chevronLeft}</button>
        <ul className={styles.portfolioList}>
          <li className={styles.portfolioItem}>
            <Link className={styles.portfolioLink} href="#">
              <img src="../../images/img-14.jpg" alt="plant in the office" />
              <div className={styles.linkHover}>
                <div className={styles.hoverTextWrap}>
                  <span className={styles.hoverText}>Wiev all</span>
                </div>
              </div>
            </Link>

            <div className={styles.portfolioLinkWrap}>
              <Link className={styles.portfolioLink} href="#">
                <img src="../../images/img-15.jpg" alt="retro radio " />
                <div className={styles.linkHover}>
                  <div className={styles.hoverTextWrap}>
                    <span className={styles.hoverText}>Wiev all</span>
                  </div>
                </div>
              </Link>

              <Link className={styles.portfolioLink} href="#">
                <img src="../../images/img-16.jpg" alt="magazins" />
                <div className={styles.linkHover}>
                  <div className={styles.hoverTextWrap}>
                    <span className={styles.hoverText}>Wiev all</span>
                  </div>
                </div>
              </Link>
            </div>
          </li>
          <li className={styles.portfolioItem}>
            <Link className={styles.portfolioLink} href="#">
              <img
                src="../../images/img-13.jpg"
                alt="magazine of the company"
              />
              <div className={styles.linkHover}>
                <div className={styles.hoverTextWrap}>
                  <span className={styles.hoverText}>Wiev all</span>
                </div>
              </div>
            </Link>
          </li>
          <li className={styles.portfolioItem}>
            <Link className={styles.portfolioLink} href="#">
              <img src="../../images/img-9.jpg" alt="forest" />
              <div className={styles.linkHover}>
                <div className={styles.hoverTextWrap}>
                  <span className={styles.hoverText}>Wiev all</span>
                </div>
              </div>
            </Link>
            <Link className={styles.portfolioLink} href="#">
              <img src="../../images/img-10.jpg" alt="documents" />
              <div className={styles.linkHover}>
                <div className={styles.hoverTextWrap}>
                  <span className={styles.hoverText}>Wiev all</span>
                </div>
              </div>
            </Link>
            <Link className={styles.portfolioLink} href="#">
              <img src="../../images/img-11.jpg" alt="calendar cards" />
              <div className={styles.linkHover}>
                <div className={styles.hoverTextWrap}>
                  <span className={styles.hoverText}>Wiev all</span>
                </div>
              </div>
            </Link>
            <Link className={styles.portfolioLink} href="#">
              <img src="../../images/img-12.jpg" alt="retro camera" />
              <div className={styles.linkHover}>
                <div className={styles.hoverTextWrap}>
                  <span className={styles.hoverText}>Wiev all</span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
        <button className={styles.sliderArrowRight}>
          {Icons.chevronRight}
        </button>
      </div>
    </section>
  );
};

export { PortfolioSlider };
