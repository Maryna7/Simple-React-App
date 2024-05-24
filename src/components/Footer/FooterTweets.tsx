import React from "react";
import styles from "./Footer.module.scss";
import { FooterTweet } from "../../types/FooterData";
import { Icons } from "../Icons/Icons";

type FooterTweetProp = {
  data: FooterTweet[];
};

const FooterTweets = ({ data }: FooterTweetProp) => {
  return (
    <div className={styles.footerColumnItem}>
      <h4 className="h4">LATEST POSTS</h4>
      <ul className={styles.postsList}>
        {data.map((item) => (
          <li className={styles.postItem}>
            <div className={styles.tweetIcon}>{Icons.twitter}</div>
            <a href="#" className={styles.tweetLink}>
              <span className={styles.tweetAuthor}>{item.author}</span>{" "}
              {item.text} {item.time}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { FooterTweets };
