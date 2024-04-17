import React from "react";
import styles from "./BlogList.module.scss";

type ImageProp = {
  image: string;
};

const BlogImage = ({ image }: ImageProp) => {
  return (
    <div
      style={{
        backgroundImage: image,
      }}
      className={styles.blogImgWrap}
    ></div>
  );
};

export { BlogImage };
