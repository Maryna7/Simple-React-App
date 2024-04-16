import React from "react";
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

const TeamList = ({ data }: TeamDataProp) => {
  return (
    <section className={styles.teamSection}>
      <div className="container">
        <Title>MEET OUR TEAM</Title>
        <ul className={styles.teamList}>
          {data.map((item) => (
            <li key={item.id} className={styles.teamItem}>
              <div className={styles.teamDescription}>
                <TeamImage imageUrl={item.imageUrl} imageAlt={item.imageAlt} />
                <ColumnsTitle>{item.heading}</ColumnsTitle>
                <div className={styles.jobTitle}>{item.jobTitle}</div>
                <ColumnsText>{item.text}</ColumnsText>
              </div>
              {item.media ? <SocialMediaList data={item.media} /> : ""}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { TeamList };
