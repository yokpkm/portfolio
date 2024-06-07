import { DarkTheme } from ".";

const darkTheme = {
  logo: {
    default: "#FFFFFF",
  },
  backgroundColors: {
    default: "#181C29",
    card: "#25293D",
  },
  tagColors: {
    design: "#FFADD9",
    coding: "#ADEEFE",
    database: "#C2C2FF",
  },
  buttonColors: {
    font: "#000000",
    background: "#FFFFFF",
  },
  switchColors: {
    active: "#CCA300",
    inactive: "#BBBBBB",
  },
  fontSize: {
    description: "0.8rem",
    content: "0.813rem",
    body: "0.875rem",
    menu: "0.9rem",
    title: "1rem",
    header: "1.5rem",
  },
  fontColor: {
    default: "rgba(255, 255, 255, 0.95)",
    medium: "rgba(255, 255, 255, 0.75)",
    light: "rgba(255, 255, 255, 0.65)",
    link: "#FFEFAD",
  },
  lineColor: {
    default: "rgba(255, 239, 173, 0.6);",
  },
  closeColor: {
    default: "#DDDDDD",
    hover: "#EEEEEE",
  },
  cardShadow: {
    default: "0px 0px 0px rgba(37, 41, 61, 0)",
  },

  //new TypeScript
  layout: {
    background: "#17191C",
    divider: "#5E646E",
  },
  primaryBtn: {
    default: "#FCFCFD", //bg color
    hover: "#DEE0E3", //bg color
    foreground: "#000000", //font color
  },
  secondaryBtn: {
    default: "#717884", //border color
    hover: "#C8CBD0", //border color
    foreground: "#FFFFFF", //font color
  },
  iconBtn: {
    default: "#FCFCFD",
    hover: "#9CA2AB",
  },
  closeBtn: {
    default: "#9CA1AA",
    hover: "#C8CBD0",
  },
  swith: {
    default: "#3B3F45", //bg color
  },
  card: {
    background: "#232629",
    border: "rgba(172, 182, 195, 0.1)",
    shadow: "0px 0px 0px rgba(0, 0, 0, 0)",
  },
  tag: {
    background: "rgba(241, 127, 157, 0.08)",
    border: "#F17E9D", //border include foreground
  },
  textColor: {
    primary: "rgba(255, 255, 255, 0.9)",
    secondary: "rgba(255, 255, 255, 0.7)",
    link: "#F17E9D",
  },
  textSize: {
    headline: "1.5rem", //24px
    title: "1rem", //16px
    body: "0.875rem", //14px: include cta
    caption: "0.8rem", //about 12.8px
  },
} as DarkTheme;

export { darkTheme };
