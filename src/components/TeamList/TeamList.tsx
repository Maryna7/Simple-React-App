/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Icons } from "../Icons/Icons";
import { Link } from "../Link/Link";
import styles from "./TeamList.module.scss";

const TeamList = () => {
  const teamSectionData = [
    {
      imageUrl: "../../images/team-1.jpg",
      imageAlt: "pictures of our staff",
      name: "Lorem Ipsum Dolor",
      jobTitle: "Logistics",
      text: [
        "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
      ],
      media: [
        {
          link: "#",
          icon: Icons.twitter,
        },
        {
          link: "#",
          icon: Icons.facebook,
        },
        {
          link: "#",
          icon: Icons.linkedIn,
        },
        {
          link: "#",
          icon: Icons.pinterest,
        },
        {
          link: "#",
          icon: Icons.googlePlus,
        },
        {
          link: "#",
          icon: Icons.youtube,
        },
      ],
    },
    {
      imageUrl: "../../images/team-2.jpg",
      imageAlt: "pictures of our staff",
      name: "Lorem Ipsum Dolor",
      jobTitle: "Support Guru",
      text: [
        "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
      ],
      media: [
        {
          link: "#",
          icon: Icons.twitter,
        },
        {
          link: "#",
          icon: Icons.facebook,
        },
        {
          link: "#",
          icon: Icons.linkedIn,
        },
        {
          link: "#",
          icon: Icons.pinterest,
        },
        {
          link: "#",
          icon: Icons.googlePlus,
        },
        {
          link: "#",
          icon: Icons.youtube,
        },
      ],
    },
    {
      imageUrl: "../../images/team-3.jpg",
      imageAlt: "pictures of our staff",
      name: "Lorem Ipsum Dolor",
      jobTitle: "Logistics",
      text: [
        "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
        "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
      ],
      media: [
        {
          link: "#",
          icon: Icons.twitter,
        },
        {
          link: "#",
          icon: Icons.facebook,
        },
        {
          link: "#",
          icon: Icons.linkedIn,
        },
        {
          link: "#",
          icon: Icons.pinterest,
        },
        {
          link: "#",
          icon: Icons.googlePlus,
        },
        {
          link: "#",
          icon: Icons.youtube,
        },
      ],
    },
  ];
  return (
    <section className={styles.teamSection}>
      <div className="container">
        <h2 className="h2">
          <span>MEET OUR TEAM</span>
        </h2>
        <ul className={styles.teamList}>
          {teamSectionData.map((item) => (
            <li className={styles.teamItem}>
              <div className={styles.teamDescription}>
                <div className={styles.imageHolder}>
                  <img
                    className={styles.teamImage}
                    src={item.imageUrl}
                    alt={item.imageAlt}
                  />
                </div>
                <h3 className="h3">{item.name}</h3>
                <div className={styles.jobTitle}>{item.jobTitle}</div>
                <div className={styles.textHolder}>
                  {item.text.map((paragraph) => (
                    <p>{paragraph}</p>
                  ))}
                </div>
              </div>

              <ul className={styles.teamSocialList}>
                {item.media.map((item) => (
                  <li className={styles.teamSocialItem}>
                    <Link className={styles.teamSocialLink} href={item.link}>
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { TeamList };
