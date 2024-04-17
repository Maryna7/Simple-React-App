import React from "react";
import styles from "./TeamList.module.scss";

type Imageprops = {
  imageUrl: string;
  imageAlt: string;
};

function TeamImage({ imageUrl, imageAlt }: Imageprops) {
  return (
    <div className={styles.imageHolder}>
      <img className={styles.teamImage} src={imageUrl} alt={imageAlt} />
    </div>
  );
}

export { TeamImage };
