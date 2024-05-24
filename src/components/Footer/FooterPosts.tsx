import React from "react";
import styles from "./Footer.module.scss";
import { FooterPost } from "../../types/FooterData";

type FooterPostProp = {
  data: FooterPost[];
};

const FooterPosts = ({ data }: FooterPostProp) => {
  return (
    <div className={styles.footerColumnItem}>
      <h4 className="h4">LATEST POSTS</h4>
      <ul className={styles.postsList}>
        {data.map((item) => (
          <li className={styles.postItem}>
            <a href="#" className={styles.postLink}>
              {item.time} by {item.author}
              <p>{item.text}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { FooterPosts };
