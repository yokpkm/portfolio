import { LightTheme } from ".";

const lightTheme = {
  logo: {
    default: "#000000",
  },
  backgroundColors: {
    default: "#FAFBFF",
    card: "#FFFFFF",
  },
  tagColors: {
    design: "#CC006D",
    coding: "#00728F",
    database: "#0000B8",
  },
  buttonColors: {
    font: "#FFFFFF",
    background: "#000000",
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
    default: "rgba(0, 0, 0, 0.85)",
    medium: "rgba(0, 0, 0, 0.65)",
    light: "rgba(0, 0, 0, 0.55)",
    link: "#A38300",
  },
  lineColor: {
    default: "rgba(163, 131, 0, 0.85);",
  },
  closeColor: {
    default: "#AAAAAA",
    hover: "#999999",
  },
  cardShadow: {
    default: "0px 8px 48px rgba(235, 237, 255, 0.8)",
  },

  //new TypeScript
  layout: {
    background: "#FCFCFD",
    divider: "#DEE0E3",
  },
  primaryBtn: {
    default: "#131416", //bg color
    hover: "#383C42", //bg color
    foreground: "#FFFFFF", //font color
  },
  secondaryBtn: {
    default: "#C8CBD0", //border color
    hover: "#9CA2AB", //border color
    foreground: "#000000", //font color
  },
  iconBtn: {
    default: "#131416",
    hover: "#717984",
  },
  closeBtn: {
    default: "#B2B6BD",
    hover: "#868D98",
  },
  swith: {
    default: "#D5D6D8",
  },
  card: {
    background: "#FCFCFD",
    border: "rgba(134, 141, 152, 0.1)",
    shadow: "0px 16px 48px rgba(200, 203, 208, 0.2)",
  },
  tag: {
    background: "rgba(220, 24, 77, 0.08)",
    border: "#DC184D", //border include foreground
  },
  textColor: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.60)",
    link: "#DC184D",
  },
  textSize: {
    headline: "1.5rem", //24px
    title: "1rem", //16px
    body: "0.875rem", //14px: include cta
    caption: "0.8rem", //about 12.8px
  },
} as LightTheme;

export { lightTheme };
