/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./ProjectList.module.scss";
import { Link } from "../Link/Link";

const ProjectList = () => {
  const sortProjectListData = [
    {
      href: "#",
      linkText: "all",
    },
    {
      href: "#",
      linkText: "branding",
    },
    {
      href: "#",
      linkText: "web",
    },
    {
      href: "#",
      linkText: "package",
    },
    {
      href: "#",
      linkText: "video",
    },
  ];

  const projectListData = [
    {
      href: "#",
      imageUrl: "../../images/img-1.jpg",
      alt: "project 1",
      hoverText: "nice poster",
    },
    {
      href: "#",
      imageUrl: "../../images/img-2.jpg",
      alt: "project 2",
      hoverText: "nice poster",
    },
    {
      href: "#",
      imageUrl: "../../images/img-3.jpg",
      alt: "project 3",
      hoverText: "nice poster",
    },
    {
      href: "#",
      imageUrl: "../../images/img-4.jpg",
      alt: "project 4",
      hoverText: "nice poster",
    },
    {
      href: "#",
      imageUrl: "../../images/img-5.jpg",
      alt: "project 5",
      hoverText: "nice poster",
    },
    {
      href: "#",
      imageUrl: "../../images/img-6.jpg",
      alt: "project 6",
      hoverText: "nice poster",
    },
    {
      href: "#",
      imageUrl: "../../images/img-7.jpg",
      alt: "project 7",
      hoverText: "nice poster",
    },
    {
      href: "#",
      imageUrl: "../../images/img-8.jpg",
      alt: "project 8",
      hoverText: "nice poster",
    },
  ];

  return (
    <section className={styles.projectSection}>
      <h2 className="h2">
        <span>Latest Projects</span>
      </h2>

      <ul className={styles.sortProjectList}>
        {sortProjectListData.map((item) => (
          <li className={styles.sortProjectItem}>
            <Link className={styles.sortProjectLink} href={item.href}>
              {item.linkText}
            </Link>
          </li>
        ))}
      </ul>

      <ul className={styles.projectList}>
        {projectListData.map((item) => (
          <li className={styles.projectItem}>
            <Link className={styles.projectLink} href={item.href}>
              <img src={item.imageUrl} alt={item.alt} />
              <span className={styles.hoverText}>{item.hoverText}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { ProjectList };
