import React from "react";
import styles from "./Navigation.module.scss";
import classnames from "classnames";
import { Link } from "../Link/Link";

const Navigation: React.FC = () => {
  const navData = [
    {
      href: "/home",
      text: "home",
    },
    {
      href: "/sliders",
      text: "sliders",
      dropdown: [
        {
          href: "#",
          text: "sliders 1",
        },
        {
          href: "#",
          text: "sliders 2",
        },
        {
          href: "#",
          text: "sliders 3",
        },
      ],
    },
    {
      href: "/pages",
      text: "pages",
      dropdown: [
        {
          href: "#",
          text: "page 1",
        },
        {
          href: "#",
          text: "page 2",
        },
        {
          href: "#",
          text: "page 3",
        },
      ],
    },
    {
      href: "/portfolio",
      text: "portfolio",
    },
    {
      href: "/headers",
      text: "headers",
    },
    {
      href: "/blog",
      text: "blog",
    },
    {
      href: "/search",
      text: "search",
    },
  ];
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navData.map((item) => (
          <li className={styles.navItem}>
            <Link className={styles.navLink} href={item.href}>
              {item.text}
            </Link>

            {item.dropdown ? (
              <ul className={styles.dropdown}>
                {item.dropdown.map((item) => (
                  <li className={styles.dropdownItem}>
                    <Link
                      className={classnames(
                        styles.dropdownLink,
                        styles.navLink
                      )}
                      href={item.href}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navigation };
