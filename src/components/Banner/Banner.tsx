import React, { useState, useEffect } from "react";
import { Link } from "../Link/Link";
import { BannerSlide } from "../../types/BannerData";
import styles from "./Banner.module.scss";

type BanerDataProp = {
  slides: BannerSlide[];
};

const Banner = ({ slides }: BanerDataProp) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <section className={styles.bannerSection}>
      <div
        key={slides[currentSlide].id}
        className={styles.bannerSlide}
        style={{ backgroundImage: slides[currentSlide].image }}
      >
        <div className={styles.container}>
          <div className={styles.textWrap}>
            {slides[currentSlide].text.map((paragraph) => (
              <p className={styles.bannerText}>{paragraph}</p>
            ))}
          </div>
          <Link
            href={slides[currentSlide].linkUrl}
            className={styles.bannerButton}
          >
            {slides[currentSlide].linkText}
          </Link>
        </div>
      </div>

      <div className={styles.dotsContainer}>
        {slides.map((slide, slideIndex) => (
          <button
            className={
              slides[currentSlide] === slide
                ? `${styles.activeDot} ${styles.dot}`
                : styles.dot
            }
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export { Banner };
