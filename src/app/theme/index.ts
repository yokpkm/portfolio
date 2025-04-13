import { lightTheme } from "./light-theme";
import { darkTheme } from "./dark-theme";

export interface PropsTheme {
  theme: LightTheme | DarkTheme;
}

export interface LightTheme {
  logo: {
    default: string;
  };
  backgroundColors: {
    default: string;
    card: string;
  };
  tagColors: {
    design: string;
    coding: string;
    database: string;
  };
  buttonColors: {
    font: string;
    background: string;
  };
  switchColors: {
    active: string;
    inactive: string;
  };
  fontSize: {
    description: string;
    content: string;
    body: string;
    menu: string;
    title: string;
    header: string;
  };
  fontColor: {
    default: string;
    medium: string;
    light: string;
    link: string;
  };
  lineColor: {
    default: string;
  };
  closeColor: {
    default: string;
    hover: string;
  };
  cardShadow: {
    default: string;
  };

  //new TypeScript
  layout: {
    background: string;
    divider: string;
  };
  primaryBtn: {
    default: string;
    hover: string;
    foreground: string;
  };
  secondaryBtn: {
    default: string;
    hover: string;
    foreground: string;
  };
  iconBtn: {
    default: string;
    hover: string;
  };
  closeBtn: {
    default: string;
    hover: string;
  };
  switch: {
    default: string;
  };
  card: {
    border: string;
  };
  tag: {
    background: string;
    foreground: string;
  };
  textColor: {
    primary: string;
    secondary: string;
    link: string;
  };
  textSize: {
    headline: string;
    title: string;
    body: string;
    caption: string;
    label: string;
  };
}

export interface DarkTheme {
  logo: {
    default: string;
  };
  backgroundColors: {
    default: string;
    card: string;
  };
  tagColors: {
    design: string;
    coding: string;
    database: string;
  };
  buttonColors: {
    font: string;
    background: string;
  };
  switchColors: {
    active: string;
    inactive: string;
  };
  fontSize: {
    description: string;
    content: string;
    body: string;
    menu: string;
    title: string;
    header: string;
  };
  fontColor: {
    default: string;
    medium: string;
    light: string;
    link: string;
  };
  lineColor: {
    default: string;
  };
  closeColor: {
    default: string;
    hover: string;
  };
  cardShadow: {
    default: string;
  };

  //new TypeScript
  layout: {
    background: string;
    divider: string;
  };
  primaryBtn: {
    default: string;
    hover: string;
    foreground: string;
  };
  secondaryBtn: {
    default: string;
    hover: string;
    foreground: string;
  };
  iconBtn: {
    default: string;
    hover: string;
  };
  closeBtn: {
    default: string;
    hover: string;
  };
  switch: {
    default: string;
  };
  card: {
    border: string;
  };
  tag: {
    background: string;
    foreground: string;
  };
  textColor: {
    primary: string;
    secondary: string;
    link: string;
  };
  textSize: {
    headline: string;
    title: string;
    body: string;
    caption: string;
    label: string;
  };
}

export { lightTheme, darkTheme };
