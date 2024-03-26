import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faWrench,
  faCameraRetro,
  faLaptop,
  faChevronLeft,
  faChevronRight,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLightbulb,
  faSquareCheck,
  faClock,
  faComments,
} from "@fortawesome/free-regular-svg-icons";

import {
  faSquareTwitter,
  faSquareFacebook,
  faLinkedin,
  faSquarePinterest,
  faSquareGooglePlus,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Icons = {
  iconBullhorn: <FontAwesomeIcon icon={faBullhorn} />,
  iconLightbulb: <FontAwesomeIcon icon={faLightbulb} />,
  iconSquareCheck: <FontAwesomeIcon icon={faSquareCheck} />,
  iconWrench: <FontAwesomeIcon icon={faWrench} />,
  iconCamera: <FontAwesomeIcon icon={faCameraRetro} />,
  iconLaptop: <FontAwesomeIcon icon={faLaptop} />,
  twitter: <FontAwesomeIcon icon={faSquareTwitter} />,
  facebook: <FontAwesomeIcon icon={faSquareFacebook} />,
  linkedIn: <FontAwesomeIcon icon={faLinkedin} />,
  pinterest: <FontAwesomeIcon icon={faSquarePinterest} />,
  googlePlus: <FontAwesomeIcon icon={faSquareGooglePlus} />,
  youtube: <FontAwesomeIcon icon={faYoutube} />,
  chevronLeft: <FontAwesomeIcon icon={faChevronLeft} />,
  chevronRight: <FontAwesomeIcon icon={faChevronRight} />,
  penToSquare: <FontAwesomeIcon icon={faPenToSquare} />,
  clock: <FontAwesomeIcon icon={faClock} />,
  comments: <FontAwesomeIcon icon={faComments} />,
};

export { Icons };
