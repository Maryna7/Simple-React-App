import React from "react";
import { FooterContactForm } from "./FooterContactForm";
import { FooterAbout } from "./FooterAbout";
import { FooterPosts } from "./FooterPosts";
import { FooterTweets } from "./FooterTweets";
import { FooterForm } from "./FooterForm";
import { BottomText } from "./BottomText";
import { Media } from "../../types/TeamData";
import styles from "./Footer.module.scss";
import data from "../../Data/Data.json";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterContactForm />
      <div className={styles.footerColumnsBlock}>
        <div className={styles.footerColumnsList}>
          <FooterAbout data={data.FooterInfoData} />
          <FooterPosts data={data.FooterPostsData} />
          <FooterTweets data={data.FooterTweetsData} />
          <FooterForm data={data.ContactMedia as Media[]} />
        </div>
      </div>
      <BottomText data={data.FooterTextData} />
    </footer>
  );
};

export { Footer };
