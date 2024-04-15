export enum Icons {
  iconWrench = "iconWrench",
  iconCamera = "iconCamera",
  iconLaptop = "iconLaptop",
}

export type BlogItem = {
  id: string;
  image: string;
  heading: string;
  text: string[];
  author: string;
  date: string;
  href: string;
};
