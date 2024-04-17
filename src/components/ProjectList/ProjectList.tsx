import React from "react";
import { Link } from "../Link/Link";
import { Title } from "../Title/Title";
import { SortProjectItem, Project } from "../../types/ProjectsData";
import styles from "./ProjectList.module.scss";

type ProjectsDataProp = {
  sortData: SortProjectItem[];
  data: Project[];
};

const ProjectList = ({ sortData, data }: ProjectsDataProp) => {
  return (
    <section className={styles.projectSection}>
      <Title>Latest Projects</Title>

      <ul className={styles.sortProjectList}>
        {sortData.map((item) => (
          <li className={styles.sortProjectItem} key={item.id}>
            <Link className={styles.sortProjectLink} href={item.href}>
              {item.linkText}
            </Link>
          </li>
        ))}
      </ul>

      <ul className={styles.projectList}>
        {data.map((item) => (
          <li className={styles.projectItem} key={item.id}>
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
