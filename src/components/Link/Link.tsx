import React from "react";
import classnames from "classnames";
import styles from "./Link.module.scss";

type LinkPtops = {
  href?: string;
  className?: string;
  children: React.ReactNode;
};
const Link = ({ href, className, children }: LinkPtops) => {
  return (
    <a className={classnames(className, styles.baseLink)} href={href}>
      {children}
    </a>
  );
};

export { Link };
