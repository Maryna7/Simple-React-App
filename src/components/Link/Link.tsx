import React from "react";
import classnames from "classnames";
import styles from "./Link.module.scss";

type LinkProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: any;
};

const Link = ({ href, className, children }: LinkProps) => {
  return (
    <a className={classnames(className, styles.baseLink)} href={href}>
      {children}
    </a>
  );
};

export { Link };
