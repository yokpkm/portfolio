import { createGlobalStyle } from "styled-components";
import { PropsTheme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    padding: 0; 
    margin: 0 ;
    background-color: ${(props: PropsTheme) => props.theme?.layout?.background};
    font-family: 'Inter';
  }
  
  html {
    height: unset;
  }
`;
