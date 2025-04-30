import { LightTheme } from ".";

const lightTheme = {
  // old TypeScript, waiting for remove
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

  // new TypeScript
  layout: {
    background: "#FCFCFD",
    divider: "#D3D5D9",
  },
  primaryBtn: {
    default: "#131416", // bg
    hover: "#383C42", // bg
    foreground: "#FCFCFD", // font
  },
  secondaryBtn: {
    default: "#C8CBD0", // border
    hover: "#9CA2AB", // border
    foreground: "#131416", // font
  },
  iconBtn: {
    default: "#131416",
    hover: "#5E646E",
  },
  closeBtn: {
    default: "#9CA1AA",
    hover: "#C8CBD0",
  },
  switch: {
    default: "#CFD1D3", 
  },
  // waiting for remove card
  card: {
    border: "rgba(237, 89, 163, 0.1)",
  },
  // waiting for remove tag
  tag: {
    background: "rgba(237, 89, 153, 0.1)",
    foreground: "#ED5999",
  },
  textColor: {
    primary: "rgba(19, 20, 22, 0.87)",
    secondary: "rgba(19, 20, 22, 0.67)",
    tertiary: "#F66FC9",
    highlight: "#F452BE"
  },
  textSize: {
    headline: "1.5rem", // 24px
    title: "1rem", // 16px
    body: "0.875rem", // 14px
    caption: "0.8125rem", // 13px
    label: "0.75rem", // 12px
  },
} as LightTheme;

export { lightTheme };
