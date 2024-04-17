export enum Icons {
  Envelope = "envelope",
  Home = "home",
  Phone = "phone",
}

export type Contact = {
  id: string;
  icon: Icons;
  heading: string;
  linkText: string;
  href: string;
};
