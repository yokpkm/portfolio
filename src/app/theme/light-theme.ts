import { LightTheme } from ".";

const lightTheme = {
  layout: {
    background: "#FCFCFD",
    divider: "#DEE0E3",
    filter: "rgba(252, 252, 253, 0.5)",
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
  tag: {
    background: "rgba(246, 111, 201, 0.08)",
    foreground: "#F66FC9",
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
