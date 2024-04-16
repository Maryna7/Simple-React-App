export enum MediaIcons {
  Twitter = "twitter",
  Facebook = "facebook",
  LinkedIn = "linkedIn",
  Pinterest = "pinterest",
  GooglePlus = "googlePlus",
  Youtube = "youtube",
}
export type Media = {
  id: string;
  link: string;
  icon: MediaIcons;
};

export type TeamMember = {
  id: string;
  imageUrl: string;
  imageAlt: string;
  heading: string;
  jobTitle: string;
  text: string;
  media?: Media[];
};
