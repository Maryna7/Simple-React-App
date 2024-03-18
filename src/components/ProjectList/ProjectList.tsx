/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './ProjectList.module.scss';

const ProjectList = () => {
 

  return (
    <section className={styles.projectSection}> 
      <h2 className="h2"><span>Latest Projects</span></h2>
      <ul className={styles.sortProjectList} >
        <li className={styles.sortProjectItem}><a className={styles.sortProjectLink} href="#">all</a></li>
        <li className={styles.sortProjectItem}><a className={styles.sortProjectLink} href="#">branding</a></li>
        <li className={styles.sortProjectItem}><a className={styles.sortProjectLink} href="#">web</a></li>
        <li className={styles.sortProjectItem}><a className={styles.sortProjectLink} href="#">package</a></li>
        <li className={styles.sortProjectItem}><a className={styles.sortProjectLink} href="#">video</a></li>
      </ul>
      <ul className={styles.projectList}>
        <li className={styles.projectItem}><a className={styles.projectLink} href="#"><img src="../../images/img-1.jpg" alt="project 1" /><span className={styles.hoverText}>nice poster</span></a></li>
        <li className={styles.projectItem}><a className={styles.projectLink} href="#"><img src="../../images/img-2.jpg" alt="project 2" /><span className={styles.hoverText}>Nice Poster</span></a></li>
        <li className={styles.projectItem}><a className={styles.projectLink} href="#"><img src="../../images/img-3.jpg" alt="project 3" /><span className={styles.hoverText}>Nice Poster</span></a></li>
        <li className={styles.projectItem}><a className={styles.projectLink} href="#"><img src="../../images/img-4.jpg" alt="project 4" /><span className={styles.hoverText}>Nice Poster</span></a></li>
        <li className={styles.projectItem}><a className={styles.projectLink} href="#"><img src="../../images/img-5.jpg" alt="project 5" /><span className={styles.hoverText}>Nice Poster</span></a></li>
        <li className={styles.projectItem}><a className={styles.projectLink} href="#"><img src="../../images/img-6.jpg" alt="project 6" /><span className={styles.hoverText}>Nice Poster</span></a></li>
        <li className={styles.projectItem}><a className={styles.projectLink} href="#"><img src="../../images/img-7.jpg" alt="project 7" /><span className={styles.hoverText}>Nice Poster</span></a></li>
        <li className={styles.projectItem}><a className={styles.projectLink} href="#"><img src="../../images/img-8.jpg" alt="project 8" /><span className={styles.hoverText}>Nice Poster</span></a></li>
      </ul>
    </section>
  );
}

export { ProjectList };