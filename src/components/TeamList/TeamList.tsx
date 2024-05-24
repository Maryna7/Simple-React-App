import React, { useState, useEffect } from "react";
import { ColumnsTitle } from "../Columns/ColumnsTitle";
import { ColumnsText } from "../Columns/ColumnsText";
import { Title } from "../Title/Title";
import { SocialMediaList } from "../SocialMediaList/SocialMediaList";
import { TeamImage } from "./TeamImage";
import { TeamMember } from "../../types/TeamData";
import styles from "./TeamList.module.scss";

type TeamDataProp = {
  data: TeamMember[];
};

// const mediaQuery = window.matchMedia("(max-width: 768px)");

const TeamList = ({ data }: TeamDataProp) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <section className={styles.teamSection}>
      <div className="container">
        <Title>MEET OUR TEAM</Title>
        <ul className={styles.teamList}>
          {matches ? (
            <>
              <div className={styles.tabsContainer}>
                {data.map((slide, slideIndex) => (
                  <button
                    className={
                      data[currentSlide] === slide
                        ? `${styles.activeTab} ${styles.tab}`
                        : styles.tab
                    }
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                  >
                    {slide.jobTitle}
                  </button>
                ))}
              </div>
              <li key={data[currentSlide].id} className={styles.teamItem}>
                <div className={styles.teamDescription}>
                  <TeamImage
                    imageUrl={data[currentSlide].imageUrl}
                    imageAlt={data[currentSlide].imageAlt}
                  />
                  <ColumnsTitle>{data[currentSlide].heading}</ColumnsTitle>
                  <div className={styles.jobTitle}>
                    {data[currentSlide].jobTitle}
                  </div>
                  <ColumnsText>{data[currentSlide].text}</ColumnsText>
                </div>
                {/* {data[currentSlide].media ? (
                <SocialMediaList data={data[currentSlide].media} />
              ) : (
                ""
              )} */}
              </li>
            </>
          ) : (
            data.map((item) => (
              <li key={item.id} className={styles.teamItem}>
                <div className={styles.teamDescription}>
                  <TeamImage
                    imageUrl={item.imageUrl}
                    imageAlt={item.imageAlt}
                  />
                  <ColumnsTitle>{item.heading}</ColumnsTitle>
                  <div className={styles.jobTitle}>{item.jobTitle}</div>
                  <ColumnsText>{item.text}</ColumnsText>
                </div>
                {item.media ? <SocialMediaList data={item.media} /> : ""}
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
};

export { TeamList };
