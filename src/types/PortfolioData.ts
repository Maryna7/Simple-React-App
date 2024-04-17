export type Image = {
  imgUrl: string;
  imgAlt: string;
  href: string;
};

export type PortfolioItem = {
  id: string;
  imgList: Image[];
};
