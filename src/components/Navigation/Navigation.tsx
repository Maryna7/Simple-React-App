import React from "react";
import { Link } from "../Link/Link";
import { Dropdown } from "./Dropdown";
import { NavItem } from "../../types/NavigationData";
import styles from "./Navigation.module.scss";

type NavDataProp = {
  data: NavItem[];
};

const Navigation = ({ data }: NavDataProp) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {data.map((item) => (
          <li className={styles.navItem} key={item.id}>
            <Link key={item.id} className={styles.navLink} href={item.href}>
              {item.text}
            </Link>

            {item.dropdown ? <Dropdown dropdown={item.dropdown} /> : null}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navigation };
