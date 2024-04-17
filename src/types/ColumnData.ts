export enum ColumnIcons {
  IconWrench = "iconWrench",
  IconCamera = "iconCamera",
  IconLaptop = "iconLaptop",
  IconBullhorn = "iconBullhorn",
  IconLightbulb = "iconLightbulb",
  IconSquareCheck = "iconSquareCheck",
  Envelope = "envelope",
  Home = "home",
  Phone = "phone",
}

export type Media = {
  id: string;
  link: string;
  icon: ColumnIcons;
};

export type Column = {
  id: string;
  icon?: ColumnIcons;
  headingsNumber?: string;
  heading: string;
  text?: string[];
  linkText?: string;
  href?: string;
  imageUrl?: string;
  imageAlt?: string;
  jobTitle?: string;
  media?: Media[];
};
