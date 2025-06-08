import { createGlobalStyle } from "styled-components";
import { PropsTheme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    margin: 0 ;
    padding: 0; 
    background-color: ${(props: PropsTheme) => props.theme?.layout?.background};
    font-family: 'Inter';
    
    // background: radial-gradient(circle at -20% -10%,  rgba(245, 163, 218, 0.5) 0%, transparent 20%),
    // radial-gradient(circle at 125% 15%,  rgba(245, 163, 218, 0.6) 0%, transparent 20%),
    // radial-gradient(circle at 45% 65%,  rgba(245, 163, 218, 0.06) 0%, transparent 45%);
    
    // background-attachment: fixed;
    // background-size: cover;
    // background-repeat: no-repeat;
  }
  
  html {
    height: unset;
  }
`;
