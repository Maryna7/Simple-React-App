import React from "react";
import classnames from "classnames";
import { Link } from "../Link/Link";
import { DropItem } from "../../types/NavigationData";
import styles from "./Navigation.module.scss";

type DropdownProps = {
  dropdown: DropItem[];
};

const Dropdown = ({ dropdown }: DropdownProps) => {
  return (
    <ul className={styles.dropdown}>
      {dropdown.map((item: DropItem) => (
        <li className={styles.dropdownItem} key={item.id}>
          <Link
            key={item.id}
            className={classnames(styles.dropdownLink, styles.navLink)}
            href={item.href}
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { Dropdown };
