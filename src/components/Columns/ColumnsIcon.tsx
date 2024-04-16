import React from "react";
import styles from "./ColumnsList.module.scss";
import { Icons } from "../Icons/Icons";
import { ServicesIcons } from "../../types/ServicesData";
import { AboutIcons } from "../../types/AboutData";
import { ContactIcons } from "../../types/ContactData";

type IconProp = {
  icon: ServicesIcons | AboutIcons | ContactIcons;
};

const ColumnsIcon = ({ icon }: IconProp) => {
  const IconMaping = {
    [ServicesIcons.IconWrench]: Icons.iconWrench,
    [ServicesIcons.IconCamera]: Icons.iconCamera,
    [ServicesIcons.IconLaptop]: Icons.iconLaptop,
    [AboutIcons.IconBullhorn]: Icons.iconBullhorn,
    [AboutIcons.IconLightbulb]: Icons.iconLightbulb,
    [AboutIcons.IconSquareCheck]: Icons.iconSquareCheck,
    [ContactIcons.Envelope]: Icons.envelope,
    [ContactIcons.Home]: Icons.home,
    [ContactIcons.Phone]: Icons.phone,
  };

  const IconComponent = (icon: ServicesIcons | AboutIcons | ContactIcons) => {
    const Icon = IconMaping[icon];
    return Icon;
  };

  return <div className={styles.iconHolder}>{IconComponent(icon)}</div>;
};

export { ColumnsIcon };
