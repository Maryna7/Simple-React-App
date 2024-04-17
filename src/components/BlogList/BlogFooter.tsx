import React from "react";
import { Icons } from "../Icons/Icons";
import styles from "./BlogList.module.scss";

type ItemProps = {
  author: string;
  date: string;
};

const BlogFooter = ({ author, date }: ItemProps) => {
  return (
    <div className={styles.blogTextFooter}>
      <div className={styles.blogAuthorWrap}>
        {Icons.penToSquare}
        <span className={styles.authorName}>{author}</span>
      </div>
      <div className={styles.blogDateWrap}>
        {Icons.clock}
        <span className={styles.blogDate}>{date}</span>
      </div>
    </div>
  );
};

export { BlogFooter };
