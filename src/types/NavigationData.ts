export type DropItem = {
  href: string;
  text: string;
  id: string;
};

export type NavItem = {
  id: string;
  href: string;
  text: string;
  dropdown?: DropItem[];
};
