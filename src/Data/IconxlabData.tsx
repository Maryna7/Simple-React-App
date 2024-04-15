import { v4 as uuidv4 } from "uuid";
import { Icons } from "../components/Icons/Icons";
import { MediaIcons, TeamMember } from "../types/TeamData";

const NavData = [
  {
    href: "/home",
    text: "home",
    id: uuidv4(),
  },
  {
    href: "/sliders",
    text: "sliders",
    id: uuidv4(),
    dropdown: [
      {
        href: "#",
        text: "sliders 1",
        id: uuidv4(),
      },
      {
        href: "#",
        text: "sliders 2",
        id: uuidv4(),
      },
      {
        href: "#",
        text: "sliders 3",
        id: uuidv4(),
      },
    ],
  },
  {
    href: "/pages",
    text: "pages",
    id: uuidv4(),
    dropdown: [
      {
        href: "#",
        text: "page 1",
        id: uuidv4(),
      },
      {
        href: "#",
        text: "page 2",
        id: uuidv4(),
      },
      {
        href: "#",
        text: "page 3",
        id: uuidv4(),
      },
    ],
  },
  {
    href: "/portfolio",
    text: "portfolio",
    id: uuidv4(),
  },
  {
    href: "/headers",
    text: "headers",
    id: uuidv4(),
  },
  {
    href: "/blog",
    text: "blog",
    id: uuidv4(),
  },
  {
    href: "/search",
    text: "search",
    id: uuidv4(),
  },
];

const BannerData = [
  {
    id: uuidv4(),
    image: 'url("../../images/baner.jpg")',
    text: [
      "Website Redesign",
      "From minor repairs to complete renovation sites transfer from any platform by WordPress.",
    ],
    linkUrl: "#",
    linkText: "Learn more",
  },
];

const ServiceData = [
  {
    id: uuidv4(),
    icon: Icons.iconWrench,
    heading: "Web Design & Development",
    text: [
      "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
    ],
  },
  {
    id: uuidv4(),
    icon: Icons.iconCamera,
    heading: "Copywriting & Publishing",
    text: [
      "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
      "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
    ],
  },
  {
    id: uuidv4(),
    icon: Icons.iconLaptop,
    heading: "Digital & Offset Printing",
    text: [
      "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
    ],
  },
];

const SortProjectListData = [
  {
    id: uuidv4(),
    href: "#",
    linkText: "all",
  },
  {
    id: uuidv4(),
    href: "#",
    linkText: "branding",
  },
  {
    id: uuidv4(),
    href: "#",
    linkText: "web",
  },
  {
    id: uuidv4(),
    href: "#",
    linkText: "package",
  },
  {
    id: uuidv4(),
    href: "#",
    linkText: "video",
  },
];

const ProjectListData = [
  {
    id: uuidv4(),
    href: "#",
    imageUrl: "../../images/img-1.jpg",
    alt: "project 1",
    hoverText: "nice poster",
  },
  {
    id: uuidv4(),
    href: "#",
    imageUrl: "../../images/img-2.jpg",
    alt: "project 2",
    hoverText: "nice poster",
  },
  {
    id: uuidv4(),
    href: "#",
    imageUrl: "../../images/img-3.jpg",
    alt: "project 3",
    hoverText: "nice poster",
  },
  {
    id: uuidv4(),
    href: "#",
    imageUrl: "../../images/img-4.jpg",
    alt: "project 4",
    hoverText: "nice poster",
  },
  {
    id: uuidv4(),
    href: "#",
    imageUrl: "../../images/img-5.jpg",
    alt: "project 5",
    hoverText: "nice poster",
  },
  {
    id: uuidv4(),
    href: "#",
    imageUrl: "../../images/img-6.jpg",
    alt: "project 6",
    hoverText: "nice poster",
  },
  {
    id: uuidv4(),
    href: "#",
    imageUrl: "../../images/img-7.jpg",
    alt: "project 7",
    hoverText: "nice poster",
  },
  {
    id: uuidv4(),
    href: "#",
    imageUrl: "../../images/img-8.jpg",
    alt: "project 8",
    hoverText: "nice poster",
  },
];

const AboutSectionData = [
  {
    id: uuidv4(),
    icon: Icons.iconBullhorn,
    headingsNumber: "89%",
    heading: "Double the traffic",
    text: [
      "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
    ],
  },
  {
    id: uuidv4(),
    icon: Icons.iconLightbulb,
    headingsNumber: "75%",
    heading: "Better Ideas",
    text: [
      "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
    ],
  },
  {
    id: uuidv4(),
    icon: Icons.iconSquareCheck,
    headingsNumber: "100%",
    heading: "Digital & Offset Printing",
    text: [
      "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
    ],
  },
];

const TeamSectionData: TeamMember[] = [
  {
    id: uuidv4(),
    imageUrl: "../../images/team-1.jpg",
    imageAlt: "pictures of our staff",
    heading: "Lorem Ipsum Dolor",
    jobTitle: "Logistics",
    text: [
      "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
    ],
    media: [
      {
        id: uuidv4(),
        link: "#",
        icon: MediaIcons.Twitter,
      },
      {
        id: uuidv4(),
        link: "#",
        icon: MediaIcons.Twitter,
      },
      {
        id: uuidv4(),
        link: "#",
        icon: MediaIcons.Facebook,
      },
      {
        id: uuidv4(),
        link: "#",
        icon: MediaIcons.Twitter,
      },
      {
        id: uuidv4(),
        link: "#",
        icon: MediaIcons.Twitter,
      },
      {
        id: uuidv4(),
        link: "#",
        icon: MediaIcons.Twitter,
      },
    ],
  },
  {
    id: uuidv4(),
    imageUrl: "../../images/team-2.jpg",
    imageAlt: "pictures of our staff",
    heading: "Lorem Ipsum Dolor",
    jobTitle: "Support Guru",
    text: [
      "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
    ],
    // media: [
    //   {
    //     id: uuidv4(),
    //     link: "#",
    //     icon: Icons.twitter,
    //   },
    //   {
    //     id: uuidv4(),
    //     link: "#",
    //     icon: Icons.facebook,
    //   },
    //   {
    //     id: uuidv4(),
    //     link: "#",
    //     icon: Icons.linkedIn,
    //   },
    //   {
    //     id: uuidv4(),
    //     link: "#",
    //     icon: Icons.pinterest,
    //   },
    //   {
    //     id: uuidv4(),
    //     link: "#",
    //     icon: Icons.googlePlus,
    //   },
    //   {
    //     id: uuidv4(),
    //     link: "#",
    //     icon: Icons.youtube,
    //   },
    // ],
  },
  {
    id: uuidv4(),
    imageUrl: "../../images/team-3.jpg",
    imageAlt: "pictures of our staff",
    heading: "Lorem Ipsum Dolor",
    jobTitle: "Logistics",
    text: [
      "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
      "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
    ],
    // media: [
    //   {
    //     id: uuidv4(),
    //     link: "#",
    //     icon: Icons.twitter,
    //   },
    //   {
    //     id: uuidv4(),
    //     link: "#",
    //     icon: Icons.facebook,
    //   },
    //   {
    //     id: uuidv4(),
    //     link: "#",
    //     icon: Icons.linkedIn,
    //   },
    //   {
    //     id: uuidv4(),
    //     link: "#",
    //     icon: Icons.pinterest,
    //   },
    //   {
    //     id: uuidv4(),
    //     link: "#",
    //     icon: Icons.googlePlus,
    //   },
    //   {
    //     id: uuidv4(),
    //     link: "#",
    //     icon: Icons.youtube,
    //   },
    // ],
  },
];

const PortfolioData = [
  {
    id: uuidv4(),
    imgList: [
      {
        imgUrl: "../../images/img-14.jpg",
        imgAlt: "plant in the office",
        href: "#",
      },
      {
        imgUrl: "../../images/img-15.jpg",
        imgAlt: "retro radio",
        href: "#",
      },
      {
        imgUrl: "../../images/img-16.jpg",
        imgAlt: "magazins",
        href: "#",
      },
    ],
  },
  {
    id: uuidv4(),
    imgList: [
      {
        imgUrl: "../../images/img-13.jpg",
        imgAlt: "magazine of the company",
        href: "#",
      },
    ],
  },
  {
    id: uuidv4(),
    imgList: [
      {
        imgUrl: "../../images/img-9.jpg",
        imgAlt: "forest",
        href: "#",
      },
      {
        imgUrl: "../../images/img-10.jpg",
        imgAlt: "documents",
        href: "#",
      },
      {
        imgUrl: "../../images/img-11.jpg",
        imgAlt: "calendar cards",
        href: "#",
      },
      {
        imgUrl: "../../images/img-12.jpg",
        imgAlt: "retro camera",
        href: "#",
      },
    ],
  },
];

const BlogListData = [
  {
    id: uuidv4(),
    image: 'url("../../images/img-1.jpg")',
    heading: "The Future of Food",
    text: [
      "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
      "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
    ],
    author: "By Admin",
    date: "Aug 28|2023",
    href: "#",
  },
  {
    id: uuidv4(),
    image: 'url("../../images/img-3.jpg")',
    heading: "The Future of Food",
    text: [
      "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
    ],
    author: "By Admin",
    date: "Aug 28|2023",
    href: "#",
  },
  {
    id: uuidv4(),
    image: 'url("../../images/img-6.jpg")',
    heading: "The Future of Food",
    text: [
      "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
    ],
    author: "By Admin",
    date: "Aug 28|2023",
    href: "#",
  },
  {
    id: uuidv4(),
    image: 'url("../../images/img-8.jpg")',
    heading: "The Future of Food",
    text: [
      "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
    ],
    author: "By Admin",
    date: "Aug 28|2023",
    href: "#",
  },
];

const ContactData = [
  {
    id: uuidv4(),
    icon: Icons.envelope,
    heading: "@ Address",
    linkText: "peach@gmail.com",
    href: "#",
  },
  {
    id: uuidv4(),
    icon: Icons.home,
    heading: "Our Address",
    linkText: "PO Box 10003 Ney York. NY 54 2nd Avenue",
    href: "#",
  },
  {
    id: uuidv4(),
    icon: Icons.phone,
    heading: "Our Address",
    linkText: "(646) 707-0086",
    href: "#",
  },
];

export {
  NavData,
  BannerData,
  ServiceData,
  SortProjectListData,
  ProjectListData,
  AboutSectionData,
  TeamSectionData,
  PortfolioData,
  BlogListData,
  ContactData,
};
