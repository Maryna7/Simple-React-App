/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from "./Navigation.module.scss"


const  Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="/home">home</a>
        </li>
        <li className={styles.navItem}>
          <a href="/sliders">sliders</a>
          <ul className={styles.dropdown}>
            <li>
              <a href="#">slider 1</a>
            </li>
            <li>
              <a href="#">slider 2</a>
            </li>
            <li>
              <a href="#">slider 3</a>
            </li>
          </ul>
        </li>
        <li className={styles.navItem}>
          <a href="#">pages</a>
          <ul className={styles.dropdown}>
            <li>
              <a href="#">page 1</a>
            </li>
            <li>
              <a href="#">page 2</a>
            </li>
            <li>
              <a href="#">page 3</a>
              <ul className="dropdown">
                <li>
                  <a href="#">page 1</a>
                </li>
                <li>
                  <a href="#">page 2</a>
                </li>
                <li>
                  <a href="#">page 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className={styles.navItem}>
          <a href="/portfolio">portfolio</a>
        </li>
        <li className={styles.navItem}>
          <a href="/headers">headers</a>
        </li>
        <li className={styles.navItem}>
          <a href="/blog">blog</a>
        </li>
        <li className={styles.navItem}>
          <a href="/search">search</a>
        </li>
      </ul>
    </nav>
  )
}

export { Navigation } 