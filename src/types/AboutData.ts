export enum AboutIcons {
  IconBullhorn = "iconBullhorn",
  IconLightbulb = "iconLightbulb",
  IconSquareCheck = "iconSquareCheck",
}

export type AboutColumn = {
  id: string;
  icon: AboutIcons;
  headingsNumber: string;
  heading: string;
  text: string;
};
