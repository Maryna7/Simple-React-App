import React, { useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../../images/logo.png";
import { Navigation } from "../Navigation/Navigation";
import { Hamburger } from "../Navigation/Hamburger";
import { Link } from "../Link/Link";

type NavDataProp = {
  navigationData: ItemProps[];
};

type ItemProps = {
  href: string;
  text: string;
  id: string;
  dropdown?: DropItem[];
};

type DropItem = {
  href: string;
  text: string;
  id: string;
};

const Header = ({ navigationData }: NavDataProp) => {
  const [isOpen, setOpen] = useState(false);

  const toggleHamburger = () => {
    setOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.logoWrap} href="#">
          <img src={Logo} className={styles.logo} alt="Logo" />
        </Link>
        <Navigation data={navigationData} isOpen={isOpen} />
        <Hamburger onClick={toggleHamburger} isOpen={isOpen} />
      </div>
    </header>
  );
};

export { Header };
