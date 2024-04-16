export enum ContactIcons {
  Envelope = "envelope",
  Home = "home",
  Phone = "phone",
}

export type Contact = {
  id: string;
  icon: ContactIcons;
  heading: string;
  linkText: string;
  href: string;
};
