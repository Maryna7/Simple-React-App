import React from 'react';
import styles from "./Header.module.scss";
import Logo from "../../images/logo.png";
import { Navigation } from '../Navigation/Navigation';


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
      <a className={styles.logo} href="#">
        <img src={Logo} alt="Logo" />
      </a>
      <Navigation />
      </div>
    </header>
  )
}

export { Header }