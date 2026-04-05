import React from "react";
import {
  BarsIcon,
  CalendarOIcon,
  CloseIcon,
  CommentsIcon,
  DownloadIcon,
  EnvelopeIcon,
  ExternalLinkIcon,
  MinusCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  InfoCircleIcon,
  ExclamationTriangleIcon,
  MinusIcon,
  FacebookSquareIcon,
  IRSEagleIcon,
  AngleDownIcon,
  AngleLeftIcon,
  AngleRightIcon,
  AngleUpIcon,
  PlusCircleIcon,
  SearchIcon,
  PlusIcon,
  PrintIcon,
  QuestionIcon,
  ShareIcon,
  TumblrSquareIcon,
  TwitterSquareIcon,
  UserIcon,
  SignOutIcon,
  IRSLogoIcon,
  FlagIcon,
  SecureCircleIcon,
  OfficialIcon
} from "../../../ols-ui/src/components/Icons";
import {
  faArrowUp,
  faBook,
  faCaretDown,
  faCaretUp,
  faCheck,
  faHandshakeAngle,
  faRecycle,
  faSort,
  faXmark,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * ODG Icon Library: {
 * component: component of Icon,
 * modalContnet: content displayed about icon
 * title: title of icon
 * download: link to download icon
 */

export const ICON_DATA = [
  {
    component: <SignOutIcon />,
    title: "arrow-right-from-bracket-solid",
    download: "/ODG-Icon-Library/arrow-right-from-bracket-solid.svg",
    importName: "faArrowRightFromBracket",
    package: "free-solid-svg-icons"
  },
  {
    component: <ExternalLinkIcon />,
    title: "arrow-right-from-square-solid",
    download: "/ODG-Icon-Library/arrow-right-from-square-solid.svg",
    importName: "faArrowRightFromSquare",
    package: "free-solid-svg-icons"
  },
  {
    component: <FontAwesomeIcon height="1em" icon={faArrowUp} />,
    title: "arrow-up-solid",
    download: "/ODG-Icon-Library/arrow-up-solid.svg",
    importName: "faArrowRight",
    package: "free-solid-svg-icons"
  },
  {
    component: <BarsIcon />,
    title: "bars-solid",
    download: "/ODG-Icon-Library/bars-solid.svg",
    importName: "faBars",
    package: "free-solid-svg-icons"
  },
  {
    component: <FontAwesomeIcon height="1em" icon={faBook} />,
    title: "book-solid",
    download: "/ODG-Icon-Library/book-solid.svg",
    importName: "faBook",
    package: "free-solid-svg-icons"
  },
  {
    component: <CalendarOIcon />,
    title: "calendar-days-solid",
    download: "/ODG-Icon-Library/calendar-days-solid.svg",
    importName: "faCalendarDays",
    package: "free-solid-svg-icons"
  },
  {
    component: <FontAwesomeIcon height="1em" icon={faCaretDown} />,
    title: "caret-down-solid",
    download: "/ODG-Icon-Library/caret-down-solid.svg",
    importName: "faCaretDown",
    package: "free-solid-svg-icons"
  },
  {
    component: <FontAwesomeIcon height="1em" icon={faCaretUp} />,
    title: "caret-up-solid",
    download: "/ODG-Icon-Library/caret-up-solid.svg",
    importName: "faCaretUp",
    package: "free-solid-svg-icons"
  },
  {
    component: <FontAwesomeIcon height="1em" icon={faCheck} />,
    title: "check-solid",
    download: "/ODG-Icon-Library/check-solid.svg",
    importName: "faCheck",
    package: "free-solid-svg-icons"
  },
  {
    component: <AngleDownIcon />,
    title: "chevron-down-solid",
    download: "/ODG-Icon-Library/chevron-down-solid.svg",
    importName: "faChevronDown",
    package: "free-solid-svg-icons"
  },
  {
    component: <AngleLeftIcon />,
    title: "chevron-left-solid",
    download: "/ODG-Icon-Library/chevron-left-solid.svg",
    importName: "faChevronLeft",
    package: "free-solid-svg-icons"
  },
  {
    component: <AngleRightIcon />,
    title: "chevron-right-solid",
    download: "/ODG-Icon-Library/chevron-right-solid.svg",
    importName: "faChevronRight",
    package: "free-solid-svg-icons"
  },
  {
    component: <AngleUpIcon />,
    title: "chevron-up-solid",
    download: "/ODG-Icon-Library/chevron-up-solid.svg",
    importName: "faChevronUp",
    package: "free-solid-svg-icons"
  },
  {
    component: <CheckCircleIcon />,
    title: "circle-check-solid",
    download: "/ODG-Icon-Library/check-circle-solid.svg",
    importName: "faCircleCheck",
    package: "free-solid-svg-icons"
  },
  {
    component: <ExclamationCircleIcon />,
    title: "circle-exclamation-solid",
    download: "/ODG-Icon-Library/check-exclamation-solid.svg",
    importName: "faCircleExlamation",
    package: "free-solid-svg-icons"
  },
  {
    component: <InfoCircleIcon />,
    title: "circle-info-solid",
    download: "/ODG-Icon-Library/circle-info-solid.svg",
    importName: "faCircleInfo",
    package: "free-solid-svg-icons"
  },
  {
    component: <MinusCircleIcon />,
    title: "circle-minus-solid",
    download: "/ODG-Icon-Library/circle-minus-solid.svg",
    importName: "faCircleMinus",
    package: "free-solid-svg-icons"
  },
  {
    component: <PlusCircleIcon />,
    title: "circle-plus-solid",
    download: "/ODG-Icon-Library/circle-plus-solid.svg",
    importName: "faCirclePlus",
    package: "free-solid-svg-icons"
  },
  {
    component: <FontAwesomeIcon height="1em" icon={faCircleQuestion} />,
    title: "circle-question-regular",
    download: "/ODG-Icon-Library/circle-question-regular.svg",
    importName: "faCircleQuestion",
    package: "free-regular-svg-icons"
  },
  {
    component: <CloseIcon />,
    title: "circle-xmark-regular",
    download: "/ODG-Icon-Library/circle-xmark-regular.svg",
    importName: "faCircleXmark",
    package: "free-regular-svg-icons"
  },
  {
    component: <CommentsIcon />,
    title: "comments-solid",
    download: "/ODG-Icon-Library/comments-solid.svg",
    importName: "faComments",
    package: "free-solid-svg-icons"
  },
  {
    component: <DownloadIcon />,
    title: "download-solid",
    download: "/ODG-Icon-Library/download-solid.svg",
    importName: "faDownload",
    package: "free-solid-svg-icons"
  },
  {
    component: <EnvelopeIcon />,
    title: "envelope-regular",
    download: "/ODG-Icon-Library/envelope-regular.svg",
    importName: "faEnvelope",
    package: "free-regular-svg-icons"
  },
  {
    component: <FacebookSquareIcon />,
    title: "facebook-square-brands",
    download: "/ODG-Icon-Library/facebook-square-brands.svg",
    importName: "faFacebookSquare",
    package: "free-brands-svg-icons"
  },
  {
    component: <FontAwesomeIcon height="1em" icon={faHandshakeAngle} />,
    title: "handshake-angle-solid",
    download: "/ODG-Icon-Library/handshake-angle-solid.svg",
    importName: "faHandshake",
    package: "free-solid-svg-icons"
  },
  {
    component: <FontAwesomeIcon height="1em" icon={faInstagram} />,
    title: "instagram-brands",
    download: "/ODG-Icon-Library/instagram-brands.svg",
    importName: "faInstagram",
    package: "free-brands-svg-icons"
  },
  {
    component: <FontAwesomeIcon height="1em" icon={faLinkedinIn} />,
    title: "linkedin-in-brands",
    download: "/ODG-Icon-Library/linkedin-in-brands.svg",
    importName: "faInstagram",
    package: "free-brands-svg-icons"
  },
  {
    component: <FontAwesomeIcon height="1em" icon={faLock} />,
    title: "lock-solid",
    download: "/ODG-Icon-Library/lock-solid.svg",
    importName: "faLock",
    package: "free-solid-svg-icons"
  },
  {
    component: <SearchIcon />,
    title: "magnifying-glass-solid",
    download: "/ODG-Icon-Library/magnifying-glass-solid.svg",
    importName: "faMagnifyingGlass",
    package: "free-solid-svg-icons"
  },
  {
    component: <MinusIcon />,
    title: "minus-solid",
    download: "/ODG-Icon-Library/minus-solid.svg",
    importName: "faMinus",
    package: "free-solid-svg-icons"
  },
  {
    component: <PlusIcon />,
    title: "plus-solid",
    download: "/ODG-Icon-Library/plus-solid.svg",
    importName: "faPlus",
    package: "free-solid-svg-icons"
  },
  {
    component: <PrintIcon />,
    title: "print-solid",
    download: "/ODG-Icon-Library/print-solid.svg",
    importName: "faPrint",
    package: "free-solid-svg-icons"
  },
  {
    component: <QuestionIcon />,
    title: "question-solid",
    download: "/ODG-Icon-Library/question-solid.svg",
    importName: "faQuestion",
    package: "free-solid-svg-icons"
  },
  {
    component: <FontAwesomeIcon height="1em" icon={faRecycle} />,
    title: "recycle-solid",
    download: "/ODG-Icon-Library/recycle-solid.svg",
    importName: "faRecycle",
    package: "free-solid-svg-icons"
  },
  {
    component: <ShareIcon />,
    title: "share-solid",
    download: "/ODG-Icon-Library/share-solid.svg",
    importName: "faShare",
    package: "free-solid-svg-icons"
  },
  {
    component: <FontAwesomeIcon height="1em" icon={faSort} />,
    title: "sort-solid",
    download: "/ODG-Icon-Library/sort-solid.svg",
    importName: "faSort",
    package: "free-solid-svg-icons"
  },
  {
    component: <ExclamationTriangleIcon />,
    title: "triangle-exclamation-solid",
    download: "/ODG-Icon-Library/triangle-exclamtaion-solid.svg",
    importName: "faTriangleExclamation",
    package: "free-solid-svg-icons"
  },
  {
    component: <TumblrSquareIcon />,
    title: "tumblr-square-brands",
    download: "/ODG-Icon-Library/tumblr-square-brands.svg",
    importName: "faTumblrSquare",
    package: "free-brands-svg-icons"
  },
  {
    component: <TwitterSquareIcon />,
    title: "twitter-square-brands",
    download: "/ODG-Icon-Library/twitter-square-brands.svg",
    importName: "faTwitterSquare",
    package: "free-brands-svg-icons"
  },
  {
    component: <UserIcon />,
    title: "user-solid",
    download: "/ODG-Icon-Library/user-solid.svg",
    importName: "faUser",
    package: "free-solid-svg-icons"
  },
  {
    component: <FontAwesomeIcon height="1em" icon={faXmark} />,
    title: "xmark-solid",
    download: "/ODG-Icon-Library/xmark-solid.svg",
    importName: "faXmark",
    package: "free-solid-svg-icons"
  },
  {
    component: <FontAwesomeIcon height="1em" icon={faYoutube} />,
    title: "youtube-brands",
    download: "/ODG-Icon-Library/youtube-brands.svg",
    importName: "faYoutube",
    package: "free-brands-svg-icons"
  }
];

export const CUSTOM_ICON_DATA = [
  {
    component: <FlagIcon height="1em" width="100%"/>,
    title: "us-flag-icon",
    download: "/ODG-Icon-Library/us-flag-icon.svg"
  },
  {
    component: <IRSEagleIcon crop />,
    title: "IRS-Eagle-Logomark",
    download: "/ODG-Icon-Library/IRS-Eagle-Logomark.svg"
  },
  {
    component: <IRSLogoIcon height="1em" width="100%"/>,
    title: "IRS-Logo",
    download: "/ODG-Icon-Library/IRS-Logo.svg"
  },
  {
    component: <OfficialIcon height="1em" width="100%"/>,
    title: "official-gov-icon",
    download: "/ODG-Icon-Library/official-gov-icon.svg"
  },
  {
    component: <SecureCircleIcon height="1em" width="100%"/>,
    title: "secure-circle-icon",
    download: "/ODG-Icon-Library/secure-circle-icon.svg"
  }
];
