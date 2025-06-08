import { DarkTheme } from ".";

const darkTheme = {
  layout: {
    background: "#131416",
    divider: "#383C42",
    filter: "rgba(19, 20, 22, 0.8)",
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
    background: "rgba(19, 20, 22, 0.8)",
    foreground: "#F7B6D2",
  },
  textColor: {
    primary: "rgba(252, 252, 253, 0.95)",
    secondary: "rgba(252, 252, 253, 0.75)",
    tertiary: "#F5A3DA", 
    highlight: "#F28CD0",
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
