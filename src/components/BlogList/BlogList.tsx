import React from "react";
import { Link } from "../Link/Link";
import { Title } from "../Title/Title";
import { ColumnsText } from "../Columns/ColumnsText";
import { ColumnsTitle } from "../Columns/ColumnsTitle";
import { BlogFooter } from "./BlogFooter";
import { BlogImage } from "./BlogImage";
import { BlogItem } from "../../types/BlogData";
import styles from "./BlogList.module.scss";

type BlogDataProp = {
  data: BlogItem[];
};

const BlogList = ({ data }: BlogDataProp) => {
  return (
    <section className={styles.blogSection}>
      <Title>LATEST BLOGS</Title>
      <ul className={styles.blogList}>
        {data.map((item) => (
          <li className={styles.blogItem} key={item.id}>
            <Link className={styles.blogLink} href={item.href}>
              <BlogImage image={item.image} />
              <div className={styles.blogTextWrap}>
                <div className={styles.blogTextHeader}>
                  <ColumnsTitle>{item.heading}</ColumnsTitle>
                </div>
                <ColumnsText>{item.text}</ColumnsText>
                <BlogFooter author={item.author} date={item.date} />
              </div>
              <div className={styles.hoverBtn}>
                <span>read more</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { BlogList };
