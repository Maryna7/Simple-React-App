import React from "react";
import styles from "./Header.module.scss";
import Logo from "../../images/logo.png";
import { Navigation } from "../Navigation/Navigation";
import { Link } from "../Link/Link";

type NavDataProp = {
  data: ItemProps[];
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

const Header = ({ data }: NavDataProp) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.logoWrap} href="#">
          <img src={Logo} className={styles.logo} alt="Logo" />
        </Link>
        <Navigation data={data} />
      </div>
    </header>
  );
};

export { Header };
