import { DarkTheme } from ".";

const darkTheme = {
 // old TypeScript, waiting for remove
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

  // new TypeScript
  layout: {
    background: "#131416",
    divider: "#4B5058",
  },
  primaryBtn: {
    default: "#FCFCFD", // bg
    hover: "#DEE0E3", // bg
    foreground: "#131416", // font
  },
  secondaryBtn: {
    default: "#717884", // border
    hover: "#C8CBD0", // border
    foreground: "#FCFCFD", // font
  },
  iconBtn: {
    default: "#FCFCFD",
    hover: "#B2B6BD",
  },
  closeBtn: {
    default: "#9CA1AA",
    hover: "#C8CBD0",
  },
  switch: {
    default: "#4B5058", 
  },
  // waiting for remove card
  card: {
    border: "rgba(247, 182, 214, 0.15)",
  },
  // waiting for remove tag
  tag: {
    background: "rgba(247, 182, 210, 0.1)",
    foreground: "#F7B6D2",
  },
  textColor: {
    primary: "rgba(252, 252, 253, 0.95)",
    secondary: "rgba(252, 252, 253, 0.75)",
    tertiary: "#F7B6D2",
  },
  textSize: {
    headline: "1.5rem", // 24px
    title: "1rem", // 16px
    body: "0.875rem", // 14px
    caption: "0.8125rem", // 13px
    label: "0.75rem", // 12px
  },
} as DarkTheme;

export { darkTheme };
