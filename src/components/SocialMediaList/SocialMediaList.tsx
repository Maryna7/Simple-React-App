import React from "react";
import { Link } from "../Link/Link";
import { Icons } from "../Icons/Icons";
import styles from "./SocialMediaList.module.scss";
import { Media, MediaIcons } from "../../types/TeamData";

type MediaProps = {
  data: Media[];
};

const SocialMediaList = ({ data }: MediaProps) => {
  const IconMaping = {
    [MediaIcons.Twitter]: Icons.twitter,
    [MediaIcons.Facebook]: Icons.facebook,
    [MediaIcons.LinkedIn]: Icons.linkedIn,
    [MediaIcons.Pinterest]: Icons.pinterest,
    [MediaIcons.GooglePlus]: Icons.googlePlus,
    [MediaIcons.Youtube]: Icons.youtube,
  };

  const IconComponent = (icon: MediaIcons) => {
    const Icon = IconMaping[icon];
    return Icon;
  };

  return (
    <ul className={styles.teamSocialList}>
      {data.map((item) => (
        <li className={styles.teamSocialItem} key={item.id}>
          <Link className={styles.teamSocialLink} href={item.link}>
            {IconComponent(item.icon)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { SocialMediaList };
