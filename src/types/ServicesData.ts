export enum ServicesIcons {
  IconWrench = "iconWrench",
  IconCamera = "iconCamera",
  IconLaptop = "iconLaptop",
}

export type Service = {
  id: string;
  icon: ServicesIcons;
  headingsNumber: null;
  heading: string;
  text: string;
};
