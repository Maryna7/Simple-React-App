/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from "./Header.module.scss";
import Logo from "../../images/logo.png";
import { Navigation } from '../Navigation/Navigation';


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
      <a className={styles.logoWrap} href="#">
        <img src={Logo} className={styles.logo} alt="Logo" />
      </a>
      <Navigation />
      </div>
    </header>
  )
}

export { Header }