/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from "./Navigation.module.scss"
import { Link } from '../Link/Link';


const  Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link>home</Link> 
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="/sliders">sliders</a>
          <ul className={styles.dropdown}>
            <li>
              <a className={styles.navLink} href="#">slider 1</a>
            </li>
            <li>
              <a className={styles.navLink} href="#">slider 2</a>
            </li>
            <li>
              <a className={styles.navLink} href="#">slider 3</a>
            </li>
          </ul>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="#">pages</a>
          <ul className={styles.dropdown}>
            <li>
              <a className={styles.navLink} href="#">page 1</a>
            </li>
            <li>
              <a className={styles.navLink} href="#">page 2</a>
            </li>
            <li>
              <a className={styles.navLink} href="#">page 3</a>
              <ul className="dropdown">
                <li>
                  <a className={styles.navLink} href="#">page 1</a>
                </li>
                <li>
                  <a className={styles.navLink} href="#">page 2</a>
                </li>
                <li>
                  <a className={styles.navLink} href="#">page 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="/portfolio">portfolio</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="/headers">headers</a>
        </li>
        <li  className={styles.navItem}>
          <a className={styles.navLink} href="/blog">blog</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="/search">search</a>
        </li>
      </ul>
    </nav>
  )
}

export { Navigation } 