import React from "react";
import { SocialMediaList } from "../SocialMediaList/SocialMediaList";
import { Media } from "../../types/TeamData";
import { Icons } from "../Icons/Icons";
import styles from "./Footer.module.scss";

type MediaProps = {
  data: Media[];
};

const FooterForm = ({ data }: MediaProps) => {
  return (
    <div className={styles.footerColumnItem}>
      <h4 className="h4">SEARCH</h4>
      <form action="" className={styles.searchForm}>
        <input type="search" className={styles.input} />
        <button type="submit" className={styles.searchButton}>
          {Icons.search}
        </button>
      </form>
      <h4 className="h4">FIND US ON</h4>
      <SocialMediaList data={data} />
    </div>
  );
};

export { FooterForm };
